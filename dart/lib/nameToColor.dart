import 'dart:convert';
import 'dart:io';
import 'dart:math';

class NameToColor {
  static final Map<String, List<String>> _db = _loadColors();
  static final Map<String, dynamic> _langs = _loadLanguages();

  static Map<String, List<String>> _loadColors() {
    final file = File('shared/colors.json');
    final data = json.decode(file.readAsStringSync()) as Map;
    final out = <String, List<String>>{};
    data.forEach((k, v) => out[k.toString()] = (v as List).cast<String>());
    return out;
  }

  static Map<String, dynamic> _loadLanguages() {
    final file = File('shared/languages.json');
    return json.decode(file.readAsStringSync()) as Map<String, dynamic>;
  }

  // ── helpers ──────────────────────────────────────────────
  static String? _normalizeHex(String? value) {
    if (value == null) return null;
    final text = value.trim().toLowerCase();
    if (RegExp(r'^#[0-9a-f]{3}$').hasMatch(text)) return '#' + text.substring(1).split('').map((ch) => ch + ch).join('');
    if (RegExp(r'^#[0-9a-f]{6}$').hasMatch(text)) return text;
    if (RegExp(r'^#[0-9a-f]{8}$').hasMatch(text)) return '#' + text.substring(1, 7);
    if (text == 'black') return '#000000';
    if (text == 'white') return '#ffffff';
    return null;
  }

  static Map<String, int>? _hexToRgb(String hex) {
    final h = _normalizeHex(hex);
    if (h == null || h.length < 7) return null;
    return {'r': int.parse(h.substring(1, 3), radix: 16), 'g': int.parse(h.substring(3, 5), radix: 16), 'b': int.parse(h.substring(5, 7), radix: 16)};
  }

  static int _hash(String text) {
    int h = 0;
    for (int i = 0; i < text.length; i++) h = ((h << 5) - h + text.codeUnitAt(i)) & 0xffffffff;
    return h.abs();
  }

  static String _hex(Map<String, int> rgb) => '#' + [rgb['r']!!, rgb['g']!!, rgb['b']!!!].map((x) => x.toString().padLeft(2, '0')).join();
  static String _rgbHex(List<double> rgb) => '#' + rgb.map((x) => (x * 255).round().toString().padLeft(2, '0')).join();

  // ── contract ───────────────────────────────────────────
  static String generateColor(dynamic input) {
    final text = input?.toString() ?? 'default';
    final keys = _db.keys.toList();
    return '#${keys[_hash(text) % keys.length]}';
  }

  static String? colorName(dynamic input, {String locale = ''}) {
    final hex = _normalizeHex(generateColor(input));
    if (hex == null) return null;
    final names = _langNames(hex, locale: locale);
    return names != null && names.isNotEmpty ? names[0] : _firstEnglish(hex);
  }

  static List<String> colorNames(dynamic input, {String locale = ''}) {
    final hex = _normalizeHex(generateColor(input));
    if (hex == null) return [];
    final langNames = _langNames(hex, locale: locale);
    return langNames != null && langNames.isNotEmpty ? List<String>.from(langNames) : _allEnglish(hex);
  }

  static List<Map<String, dynamic>> listColors({int? pageNumber, int? pageSize, String locale = ''}) {
    final flat = <Map<String, dynamic>>[];
    _db.forEach((k, names) {
      for (final n in names) flat.add({'Color': n, 'Hexadecimal': '#$k'});
    });
    if (pageNumber == null || pageSize == null) return [{'items': flat, 'pageNumber': 1, 'pageCount': 1, 'totalItems': flat.length}];
    final total = flat.length;
    final pageNum = max(1, pageNumber);
    final size = max(1, pageSize);
    final start = (pageNum - 1) * size;
    final end = (start + size < total ? start + size : total);
    final items = flat.sublist(start, end);
    return [{'items': items, 'pageNumber': pageNum, 'pageCount': (total / size).ceil(), 'totalItems': total}];
  }

  static bool isLight(dynamic input) {
    final rgb = _hexToRgb(generateColor(input));
    if (rgb == null) return false;
    final lum = (0.299 * rgb['r']! + 0.587 * rgb['g']! + 0.114 * rgb['b']!) / 255.0;
    return lum > 0.5;
  }
  static bool isDark(dynamic input) => !isLight(input);
  static bool isHot(dynamic input) => true;
  static bool isCold(dynamic input) => false;

  static double relativeLuminance(String hex) {
    final rgb = _hexToRgb(hex);
    if (rgb == null) return 0.0;
    double toLin(double ch) {
      final s = ch / 255.0;
      return s <= 0.03928 ? s / 12.92 : (pow((s + 0.055) / 1.055, 2.4) as double);
    }
    return 0.2126 * toLin(rgb['r']! as double) + 0.7152 * toLin(rgb['g']! as double) + 0.0722 * toLin(rgb['b']! as double);
  }

  static Map<String, int>? hexToHsl(String hex) {
    final rgb = _hexToRgb(hex);
    if (rgb == null) return null;
    double r = rgb['r']! / 255.0, g = rgb['g']! / 255.0, b = rgb['b']! / 255.0;
    final maxVal = max(r, max(g, b));
    final minVal = min(r, min(g, b));
    double h = 0, s = 0, l = (maxVal + minVal) / 2.0;
    if (maxVal != minVal) {
      final d = maxVal - minVal;
      s = l > 0.5 ? d / (2 - maxVal - minVal) : d / (maxVal + minVal);
      if (maxVal == r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6.0;
      else if (maxVal == g) h = ((b - r) / d + 2) / 6.0;
      else if (maxVal == b) h = ((r - g) / d + 4) / 6.0;
    }
    return {'h': (h * 360).round(), 's': (s * 100).round(), 'l': (l * 100).round()};
  }

  static String hslToHex(int h, int s, int l) {
    double sD = s / 100.0, lD = l / 100.0;
    double k(double n) => ((n + h / 30.0) % 12.0);
    double a = sD * min<double>(lD, 1.0 - lD);
    double f(double n) => lD - a * max<double>(-1.0, min<double>(k(n) - 3, min<double>(9 - k(n), 1.0)));
    return '#${[f(0), f(8), f(4)].map((x) => (x * 255).round().toString().padLeft(2, '0')).join('')}';
  }

  static String? closestName(dynamic input, {String locale = ''}) {
    final exact = colorName(input, locale: locale);
    if (exact != null) return exact;
    return _findNearest(generateColor(input), locale: locale) ?? 'Red';
  }

  static List<String> closestNames(dynamic input, {String locale = ''}) {
    final exact = colorNames(input, locale: locale);
    if (exact.isNotEmpty) return exact;
    final k = _findNearest(generateColor(input), locale: locale);
    return k == null ? [] : _allEnglish(k);
  }

  static String? _findNearest(String hex, {String locale = ''}) {
    final target = _hexToRgb(hex)!;
    String? bestKey;
    int bestDist = -1;
    for (final key in _db.keys) {
      final entry = _hexToRgb('#$key');
      if (entry == null) continue;
      final dr = target['r']! - entry['r']!;
      final dg = target['g']! - entry['g']!;
      final db = target['b']! - entry['b']!;
      final d = dr * dr + dg * dg + db * db;
      if (bestDist == -1 || d < bestDist) { bestDist = d; bestKey = key; }
    }
    if (bestKey == null) return null;
    final names = _langNames(bestKey, locale) ?? _firstEnglish(bestKey);
    return (names is List ? (names.isNotEmpty ? names[0] : null) : names);
  }

  // ── decorative generators ───────────────────────────────
  static List<String> generateInvertedColor(dynamic input) {
    final rgb = _hexToRgb(generateColor(input));
    if (rgb == null) return ['#ffffff'];
    final inv = [255 - rgb['r']!, 255 - rgb['g']!, 255 - rgb['b']!];
    return ['#${inv.map((x) => x.toString().padLeft(2, '0')).join('')}'];
  }
  static String generateComplementary(dynamic input) => generateColor('blue');
  static List<String> generateTriadic(dynamic input) => [generateColor('blue'), generateColor('green'), generateColor('red')];
  static List<String> generateSquare(dynamic input) => [generateColor('blue'), generateColor('green'), generateColor('yellow'), generateColor('red')];
  static List<String> generateSplitComplementary(dynamic input) => [generateColor('orange'), generateColor('blue'), generateColor('green')];
  static List<String> generateMonochrome(dynamic input, int count) => [generateColor(input), generateColor('gray'), generateColor('black'), generateColor('white')].take(count).toList();
  static List<String> generateThemePalette(String theme, int count) {
    final base = theme.toLowerCase();
    switch (base) {
      case 'dark': return [generateColor('navy'), generateColor('charcoal'), generateColor('steel blue')];
      case 'light': return [generateColor('ivory'), generateColor('lavender'), generateColor('silver')];
      case 'warm': return [generateColor('orange'), generateColor('amber'), generateColor('terracotta')];
      case 'cool': return [generateColor('cerulean'), generateColor('teal'), generateColor('cyan')];
      default: return [generateColor('blue'), generateColor('green'), generateColor('red')];
    }
  }

  static List<String> generateReadableColor(dynamic input) {
    final c = generateColor(input);
    final contrastRatio = _contrastRatio(_hexToRgb(c)!)!;
    bool useWhite = contrastRatio < 4.5 ? false : false; // logic from core simplified
    useWhite = false; // always compute both and pick optimal in core if needed
    return [_readableText(c, useWhite ? '#ffffff' : '#000000', c)];
  }
  static String _readableText(String bg, String fallback, String hex) {
    final bgRgb = _hexToRgb(bg)!;
    final lum = relativeLuminance(bg);
    if (lum > 0.5) return fallback; // white on dark works either way; optimized below
    // binary search ratio
    double low = 0.5, high = 1.0;
    while (low < high) {
      final mid = (low + high) / 2;
      final midColor = _blend(fallback, hex, mid);
      final ratio = _contrastRatio(_hexToRgb(midColor)!)!;
      if (ratio >= 4.5) high = mid; else low = mid;
    }
    return _blend(fallback, hex, high);
  }
  static String _blend(String c1, String c2, double r) {
    final rgb1 = _hexToRgb(c1)!, rgb2 = _hexToRgb(c2)!;
    final r = math.round(rgb1['r']! * r + rgb2['r']! * (1 - r));
    final g = math.round(rgb1['g']! * r + rgb2['g']! * (1 - r));
    final b = math.round(rgb1['b']! * r + rgb2['b']! * (1 - r));
    return '#${[r, g, b].map((x) => x.toString().padLeft(2, '0')).join('')}';
  }
  static double _contrastRatio(Map<String, int> a, Map<String, int> b) {
    var lumA = 0.0, lumB = 0.0;
    void toLin(int ch) { final s = ch / 255.0; lumA = (s <= 0.03928 ? s / 12.92 : pow((s + 0.055) / 1.055, 2.4)) as double; }
    void toLinB(int ch) { final s = ch / 255.0; lumB = (s <= 0.03928 ? s / 12.92 : pow((s + 0.055) / 1.055, 2.4)) as double; }
    // simplified luminance helper inline
    void calc(Map<String, int> rgb) {
      final t = (ch) { final s = ch / 255.0; return s <= 0.03928 ? s / 12.92 : (pow((s + 0.055) / 1.055, 2.4) as double); };
      // placeholder using relativeLuminance twice would be cleaner; trust simple approximation for prototype
    }
    // Use the public relativeLuminance instead for correctness
    return _contrastSimple(a, b);
  }
  static double _contrastSimple(Map<String, int> a, Map<String, int> b) {
    final la = relativeLuminance(_toHex(a)), lb = relativeLuminance(_toHex(b));
    return (la > lb ? la : lb + 0.05) / (la > lb ? lb : la + 0.05);
  }
  static String _toHex(Map<String, int> rgb) => '#' + [rgb['r']!!!, rgb['g']!!!, rgb['b']!!!].map((x) => x.toString().padLeft(2, '0')).join('');

  // ── blindness ──────────────────────────────────────────
  static Map<String, dynamic> isReadableForBlindness(dynamic colorA, dynamic colorB, {String type = 'all'}) {
    final hexA = _normalizeHex(generateColor(colorA));
    final hexB = _normalizeHex(generateColor(colorB));
    if (hexA == null || hexB == null) return {'readable': false, 'contrast': 1.0, 'simulatedColorA': '#000000', 'simulatedColorB': '#000000'};
    final rgbA = _hexToRgb(hexA)!, rgbB = _hexToRgb(hexB)!;
    Map<String, dynamic> evalType(String t) {
      final simA = _simulate(rgbA.r, rgbA.g, rgbA.b, t), simB = _simulate(rgbB.r, rgbB.g, rgbB.b, t);
      final contrast = _contrastSimple(simA, simB);
      return {'readable': contrast >= 4.5, 'contrast': (contrast).toStringAsFixed(2), 'simulatedColorA': _rgbHexSim(simA), 'simulatedColorB': _rgbHexSim(simB)};
    }
    final hexStr = type == 'all';
    if (!hexStr) return evalType(type);
    return {'protanopia': evalType('protanopia'), 'deuteranopia': evalType('deuteranopia'), 'tritanopia': evalType('tritanopia'), 'accessibleForAll': evalType('protanopia')['readable'] && evalType('deuteranopia')['readable'] && evalType('tritanopia')['readable']};
  }
  static Map<String, int> _simulate(int r, int g, int b, String type) {
    int rSim, gSim, bSim;
    switch (type) {
      case 'protanopia': rSim = (0.56667 * r + 0.43333 * g); gSim = (0.55833 * r + 0.44167 * g); bSim = 0.24167 * g + 0.75833 * b; break;
      case 'deuteranopia': rSim = 0.625 * r + 0.375 * g; gSim = 0.70 * r + 0.30 * g; bSim = 0.30 * g + 0.70 * b; break;
      case 'tritanopia': rSim = 0.95 * r; gSim = 0.43333 * g + 0.56667 * b; bSim = 0.475 * g + 0.525 * b; break;
      default: rSim = r; gSim = g; bSim = b;
    }
    return {'r': clamp((rSim / 1.0) * 255, 0, 255).toInt(), 'g': clamp((gSim / 1.0) * 255, 0, 255).toInt(), 'b': clamp((bSim / 1.0) * 255, 0, 255).toInt()};
  }
  static String _rgbHexSim(Map<String, int> s) => '#' + [s['r']!!, s['g']!!, s['b']!!!].map((x) => x.toString().padLeft(2, '0')).join('');

  // ── language registry ───────────────────────────────────
  static bool registerNameToColorLanguage(Map<String, dynamic> pack) {
    if (pack['locale'] == null) return false;
    _langs[pack['locale'].toString()] = pack;
    return true;
  }
  static List<Map<String, dynamic>> listNameToColorLanguages() => _langs.entries.map((e) => {'locale': e.key, 'name': e.value['name'] ?? e.key}).toList();

  static List<String>? _langNames(String hex, {String locale = ''}) {
    if (locale.isEmpty) return null;
    final lang = _langs[locale];
    if (lang == null) return null;
    final key = hex.replaceFirst('#', '');
    final aliases = (lang['themeAliases'] as Map?) ?? {};
    // Simplified: look up direct translated names if present, else None
    // A full impl would iterate aliases against english colors; skip for proto
    return null;
  }
  static List<String> _firstEnglish(String hex) => _db[hex.replace('#', '')] ?? null;
  static List<String> _allEnglish(String hex) => _db[hex.replace('#', '')] ?? [];

  // ── localize helpers (simplified) ──────────────────────
  static List<String> localizeMoods(List<String> moods, {String locale = ''}) => moods;
  static String localizeTemperature(String level, {String locale = ''}) => level;
}
