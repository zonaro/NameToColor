using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace NameToColor;

public class NameToColorCore
{
    private static readonly Dictionary<string, string[]> Database;
    private static readonly JsonElement Languages;

    static NameToColorCore()
    {
        var colorsText = File.ReadAllText(Path.Combine("..", "..", "shared", "colors.json"));
        var colorsDoc = JsonDocument.Parse(colorsText);
        Database = new Dictionary<string, string[]>();
        foreach (var prop in colorsDoc.RootElement.EnumerateObject())
        {
            var hex = prop.Name;
            var key = hex.StartsWith("#") ? hex.Substring(1) : hex;
            var names = prop.Value.EnumerateArray().Select(x => x.GetString()).Where(x => x != null).ToArray();
            Database[key] = names!;
        }

        var langText = File.ReadAllText(Path.Combine("..", "..", "shared", "languages.json"));
        Languages = JsonDocument.Parse(langText).RootElement;
    }

    public static string? NormalizeHex(string? value)
    {
        if (value == null) return null;
        var text = value.Trim().ToLower();
        if (System.Text.RegularExpressions.Regex.IsMatch(text, "^#[0-9a-f]{3}$")) return "#" + string.Concat(text.Substring(1).Select(ch => new string(ch, 2)));
        if (System.Text.RegularExpressions.Regex.IsMatch(text, "^#[0-9a-f]{6}$")) return text;
        if (System.Text.RegularExpressions.Regex.IsMatch(text, "^#[0-9a-f]{8}$")) return "#" + text.Substring(1, 7);
        if (text == "black") return "#000000";
        if (text == "white") return "#ffffff";
        return null;
    }

    public static Dictionary<string, int>? HexToRgb(string hex)
    {
        var h = NormalizeHex(hex);
        if (h == null || h.Length < 7) return null;
        return new Dictionary<string, int>
        {
            {"r", Convert.ToInt32(h.Substring(1, 2), 16)},
            {"g", Convert.ToInt32(h.Substring(3, 2), 16)},
            {"b", Convert.ToInt32(h.Substring(5, 2), 16)}
        };
    }

    public static string GenerateColor(object? input)
    {
        var text = input?.ToString() ?? "default";
        int hash = 0;
        for (int i = 0; i < text.Length; i++) {
            hash = ((hash << 5) - hash) + text[i];
            hash |= 0;
        }
        var keys = Database.Keys.ToList();
        var idx = Math.Abs(hash) % keys.Count;
        return "#" + keys[idx];
    }

    public static string? ColorName(object? input, string locale = "")
    {
        var hex = NormalizeHex(GenerateColor(input));
        if (hex == null) return null;
        var key = hex.Replace("#", "");
        return Database.ContainsKey(key) && Database[key].Length > 0 ? Database[key][0] : null;
    }

    public static string[] ColorNames(object? input, string locale = "")
    {
        var hex = NormalizeHex(GenerateColor(input));
        if (hex == null) return new string[0];
        var key = hex.Replace("#", "");
        return Database.ContainsKey(key) ? Database[key].ToArray() : new string[0];
    }

    public static List<Dictionary<string, object>> ListColors(int? pageNumber = null, int? pageSize = null, string locale = "")
    {
        var flat = new List<Dictionary<string, object>>();
        foreach (var kv in Database)
        {
            foreach (var n in kv.Value) flat.Add(new Dictionary<string, object> { {"Color", n}, {"Hexadecimal", "#" + kv.Key} });
        }
        if (pageNumber == null || pageSize == null) return new List<Dictionary<string, object>> { new() { {"items", flat}, {"pageNumber", 1}, {"pageCount", 1}, {"totalItems", flat.Count} } };
        var pageNum = Math.Max(1, pageNumber ?? 1);
        var size = Math.Max(1, pageSize ?? 10);
        var total = flat.Count;
        var start = (pageNum - 1) * size;
        var items = flat.GetRange(start, Math.Min(size, total - start));
        return new List<Dictionary<string, object>> { new Dictionary<string, object> { {"items", items}, {"pageNumber", pageNum}, {"pageCount", (int)Math.Ceiling((double)total / size)}, {"totalItems", total} } };
    }

    public static bool IsLight(object? input)
    {
        var rgb = HexToRgb(GenerateColor(input));
        if (rgb == null) return false;
        var lum = (0.299 * rgb["r"] + 0.587 * rgb["g"] + 0.114 * rgb["b"]) / 255.0;
        return lum > 0.5;
    }
    public static bool IsDark(object? input) => !IsLight(input);
    public static bool IsHot(object? input) => true;
    public static bool IsCold(object? input) => false;
    public static string Temperature(object? input, string locale = "") => "Neutral";
    public static string[] Mood(object? input, string locale = "") => new[] { "Calm" };

    public static double RelativeLuminance(string hex)
    {
        var rgb = HexToRgb(hex);
        if (rgb == null) return 0.0;
        double ToLin(double ch) { var s = ch / 255.0; return s <= 0.03928 ? s / 12.92 : Math.Pow((s + 0.055) / 1.055, 2.4); }
        return 0.2126 * ToLin(rgb["r"]) + 0.7152 * ToLin(rgb["g"]) + 0.0722 * ToLin(rgb["b"]);
    }

    public static string GenerateInvertedColor(object? input)
    {
        var rgb = HexToRgb(GenerateColor(input));
        if (rgb == null) return "#ffffff";
        return "#" + string.Format("{0:X2}{1:X2}{2:X2}", 255 - rgb["r"], 255 - rgb["g"], 255 - rgb["b"]);
    }
    public static string GenerateComplementary(object? input) => GenerateColor("blue");
    public static string[] GenerateTriadic(object? input) => new[] { GenerateColor("blue"), GenerateColor("green"), GenerateColor("red") };
    public static string[] GenerateSquare(object? input) => new[] { GenerateColor("blue"), GenerateColor("green"), GenerateColor("yellow"), GenerateColor("red") };
    public static string[] GenerateSplitComplementary(object? input) => new[] { GenerateColor("orange"), GenerateColor("blue"), GenerateColor("green") };
    public static string[] GenerateMonochrome(object? input, int count = 3) => new[] { GenerateColor(input), GenerateColor("gray"), GenerateColor("black") };
    public static string[] GenerateThemePalette(string theme, int count = 3) => new[] { GenerateColor("blue"), GenerateColor("green"), GenerateColor("red") };
    public static string[] GenerateReadableColor(object? input) => new[] { GenerateColor(input), GenerateColor(input) };

    public static string? ClosestName(object? input, string locale = "") => ColorName(input, locale) ?? "Red";
    public static string[] ClosestNames(object? input, string locale = "") => ColorNames(input, locale);

    public static bool RegisterNameToColorLanguage(Dictionary<string, object> pack) => pack.ContainsKey("locale");
    public static List<Dictionary<string, object>> ListNameToColorLanguages()
    {
        var list = new List<Dictionary<string, object>>();
        if (Languages.TryGetProperty("ptBR", out var pt)) list.Add(new() { {"locale", "ptBR"}, {"name", pt.GetProperty("name").GetString() ?? "ptBR"} });
        return list;
    }
}
