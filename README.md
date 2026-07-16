# NameToColor

Converts text, IDs, and color formats to hexadecimal. The plugin combines an extensive built-in color name database with deterministic fallback for any input.

## 🔗 Interactive Test Page

[https://zonaro.github.io/NameToColor/](https://zonaro.github.io/NameToColor/)

Try all plugin features live — including the paginated color database browser with `listColors`, instant search filtering, and one-click copy buttons for ID, Name, and Hex values.

## CDN Installation

```html
<script src="https://cdn.jsdelivr.net/gh/zonaro/NameToColor@main/NameToColor.js"></script>
```

After including the script, all functions become globally available in the browser — including `generateColor()`, `generateReadableColor()`, `listColors()`, color harmonies, color name lookup, and utility helpers.

## Functions

### `generateColor(input)`

Main function. Accepts various input types and returns a hexadecimal color code (`#rrggbb` or `#rrggbbaa`), or an array of codes when the input is an array.

- **Array** → calls `generateColor` on each element recursively (nested arrays work too), returns an array.
- **Object** (non-array, non-element) → converted to string first (`String(input)`), then processed.
- **Multiple words** — splits into individual words and processes them in two phases:
  1. **Reordering**: words starting with `dark`, `light`, `bright`, or `random` are moved after the next non-modifier word (e.g. `"Dark Blue"` → `["Blue", "Dark"]`).
  2. **Iterative blending**: starts with the first word's color, then blends each subsequent word one by one (75% current color, 25% incoming color). `"darker"` / `"lighter"` / `"brighter"` count as two modifiers. `"random"` generates a random HSL variation (±30° hue, ±20% saturation, ±20% lightness) of the current color.
  
  E.g. `generateColor("Dark Sea Green")` resolves via the database first; `generateColor("Dark Zonaro")` blends `Zonaro` darkened by `Dark`; `generateColor("Random Red")` returns a different red-toned random color each time.

### `generateReadableColor(input)`

Returns a `[textColor, backgroundColor]` pair where the text color is readable **and harmonious** over the background, **with guaranteed WCAG AA (4.5:1) contrast**.

#### Algorithm

1. Generates the base color with `generateColor(input)`.
2. Calculates the relative luminance of the background color according to the WCAG formula.
3. Picks the base color (white or black) with the **greatest contrast** against the background.
4. **Dynamically calculates** the blend ratio needed to reach **WCAG AA (4.5:1)**, ensuring readability without completely sacrificing visual harmony — the minimum blend is 50% of the base color.

```js
generateReadableColor("tomato");
// E.g.: ["#b24338", "#ff6347"]  (blended text, not pure black)

generateReadableColor("black");
// -> ["#4d4d4d", "#000000"]    (blended text, not pure white)

generateReadableColor("#85d8fd");
// E.g.: ["#152228", "#85d8fd"]  (contrast >= 4.5:1 guaranteed)
```

Practical usage on an HTML element:

```js
const el = document.getElementById("username");
const [textColor, backgroundColor] = generateReadableColor(el.textContent);

el.style.color = textColor;
el.style.backgroundColor = backgroundColor;
```

### `listColors(pageNumber?, pageSize?)`

Returns the internal color database in a paginated format. Entries with multiple color names (synonyms) are flattened so each name appears as its own `{ Color, Hexadecimal }` item.

```js
// All colors on one page
listColors();
// -> { items: [...], pageNumber: 1, pageCount: 1, totalItems: 2362 }

// Page 2 with 10 items
listColors(2, 10);
// -> { items: [...], pageNumber: 2, pageCount: 237, totalItems: 2362 }
```

Useful for building color browsers, pickers, or tables. The interactive test page uses this function to display the full database with pagination.

## Color Name Lookup

### `colorName(input)`

Returns the **first** color name from the internal database whose hex exactly matches the generated color for the input. Returns `null` if no exact match is found.

```js
colorName("Absolute Zero"); // -> "Absolute Zero"
colorName(1);               // -> "Absolute Zero"
colorName("#0048BA");       // -> "Absolute Zero"
colorName("unknown");       // -> null
```

### `colorNames(input)`

Returns **all** color names (synonyms) for the hex that matches the input. Unlike `colorName()`, this returns the full array for entries with multiple names.

```js
colorNames("Aqua");          // -> ["Aqua", "Cyan", "Spanish Sky Blue"]
colorNames("#00FFFF");       // -> ["Aqua", "Cyan", "Spanish Sky Blue"]
colorNames("unknown");       // -> []
```

### `closestName(input)`

Like `colorName()`, but when there is no exact match, finds the **nearest color** by RGB Euclidean distance and returns its first name.

```js
closestName("#ff6348");      // -> "Tomato" (nearest match)
closestName("unknown");      // -> nearest color name in the database
```

### `closestNames(input)`

Like `colorNames()`, but with fuzzy fallback — finds the nearest color by RGB distance and returns all its names.

```js
closestNames("#00FFFF");     // -> ["Aqua", "Cyan", "Spanish Sky Blue"]
closestNames("#ff6348");     // -> ["Tomato"]
closestNames("unknown");     // -> names of the nearest color
```

## Color Harmonies

### `generateInvertedColor(input)`

Returns the **negative** (inverted) color of the input. Each RGB channel is subtracted from 255.

```js
generateInvertedColor("#ff0000");  // -> "#00ffff" (Red → Cyan)
generateInvertedColor("black");    // -> "#ffffff"
generateInvertedColor("gold");     // -> "#0028ff"
```

### `generateComplementary(input)`

Returns the **complementary** color — the exact opposite on the color wheel (180° away in HSL hue).

```js
generateComplementary("#ff0000");  // -> "#00ffff" (Red → Cyan)
generateComplementary("#0000ff");  // -> "#ffff00" (Blue → Yellow)
generateComplementary("#808080");  // -> "#808080" (Gray — no hue to complement)
```

### `generateTriadic(input)`

Returns an array of **3 colors** equally spaced on the color wheel (120° apart).

```js
generateTriadic("#ff0000");  // -> ["#ff0000", "#00ff00", "#0000ff"]
generateTriadic("gold");     // -> ["#ffd700", "#00ffd9", "#d900ff"]
```

### `generateSquare(input)`

Returns an array of **4 colors** equally spaced on the color wheel (90° apart) — a tetradic/square scheme.

```js
generateSquare("#ff0000");   // -> ["#ff0000", "#80ff00", "#00ffff", "#7f00ff"]
```

### `generateSplitComplementary(input)`

Returns an array of **3 colors**: the base color and two colors adjacent to its complement (150° and 210°).

```js
generateSplitComplementary("#ff0000");
// -> ["#ff0000", "#00ff80", "#007fff"]
```

### `generateMonochrome(input, count?)`

Generates a **monochrome palette** with `count` colors (default **5**, min 2, max 21). All colors share the same hue and saturation — only lightness varies. Returns colors sorted from lightest to darkest.

```js
generateMonochrome("#ff0000");
// -> ["#ffa8a8", "#ff5757", "#ff0000", "#a80000", "#570000"]

generateMonochrome("gold", 3);
// -> ["#ffec80", "#ffd700", "#806c00"]

generateMonochrome("black", 5);
// -> ["#cccccc", "#999999", "#666666", "#333333", "#000000"]
```

### `isReadableForBlindness(colorA, colorB, type)`

Checks whether two colors are **readable** (accessible) for various types of **color blindness**, simulating how the colors are perceived by a person with that condition and calculating the WCAG 2.1 contrast ratio between the simulated perceptions.

Uses **simplified Brettel/Vienot matrices** applied to linearized sRGB values.

#### Parameters

| Parameter | Type     | Description                                                                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorA`  | `*`      | First color (any value accepted by `generateColor()`)                                                                                                      |
| `colorB`  | `*`      | Second color (any value accepted by `generateColor()`)                                                                                                     |
| `type`    | `string` | Type of color blindness: `"protanopia"` (red-deficient), `"deuteranopia"` (green-deficient), `"tritanopia"` (blue-deficient), or `"all"` (tests all three) |

#### Return Value

For a **specific type**, returns:

```js
{
  readable: boolean,      // true if simulated contrast >= 4.5:1 (WCAG AA)
  contrast: number,        // the exact simulated contrast ratio
  simulatedColorA: string, // HEX of color A as seen by the color blind person
  simulatedColorB: string  // HEX of color B as seen by the color blind person
}
```

For `"all"`, returns an object mapping each type plus an `accessibleForAll` flag.

#### Algorithm

The function follows these precise steps:

1. **Linearization** — Converts sRGB to linear RGB using the standard gamma expansion (threshold 0.04045)
2. **CVD Simulation** — Multiplies linear channels by the simplified Brettel/Vienot matrices for the selected type
3. **Delinearization** — Converts back to sRGB (threshold 0.0031308), multiplies by 255, and clamps
4. **WCAG Contrast** — Calculates the relative luminance of each simulated color and the contrast ratio between them

#### Examples

```js
// Test if red text on green background is readable for protanopia
isReadableForBlindness("#ff0000", "#00ff00", "protanopia");
// → { readable: false, contrast: 1.2, simulatedColorA: "#c6c500", simulatedColorB: "#b0b187" }

// Test all three types at once
isReadableForBlindness("white", "black", "all");
// → { protanopia: {...}, deuteranopia: {...}, tritanopia: {...}, accessibleForAll: true }

// Check a real UI scenario with color names
isReadableForBlindness("tomato", "rebeccapurple", "deuteranopia");
// → { readable: true, contrast: 4.53, simulatedColorA: "#d6df51", simulatedColorB: "#575a85" }
```

<div class="note">

> **💡 Tip:** A contrast ratio below **3.0:1** is considered illegible for UI elements. A ratio below **4.5:1** fails WCAG AA for normal text. Use this function to verify your color pairs are accessible to people with color vision deficiencies.

</div>

## Utility Functions

These helper functions are also exposed globally for fine-grained control:

| Function                                       | Description                                                                                                                  |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `hexToRgb(hex)`                                | Converts `#rrggbb` to `{ r, g, b }` (0–255)                                                                                  |
| `hexToHsl(hex)`                                | Converts `#rrggbb` to `{ h, s, l }` (hue 0–360°, saturation 0–100%, lightness 0–100%)                                        |
| `hslToHex(h, s, l)`                            | Converts HSL values back to `#rrggbb`                                                                                        |
| `relativeLuminance(hex)`                       | Returns the WCAG relative luminance (0–1)                                                                                    |
| `normalizeHex(value)`                          | Normalizes `black`, `white`, `#rgb`, `#rrggbbaa` to `#rrggbb`                                                                |
| `isLight(input)`                               | Returns `true` if the generated color is light (luminance > 0.5)                                                             |
| `isDark(input)`                                | Returns `true` if the generated color is dark (luminance ≤ 0.5)                                                              |
| `temperature(input)`                           | Returns the temperature level as a string: `VeryHot`, `Hot`, `Neutral Hot`, `Neutral`, `Neutral Cold`, `Cold`, or `VeryCold` |
| `isHot(input)`                                 | Returns `true` if the generated color is warm/hot (combined HSL hue + RGB score > 0)                                         |
| `isCold(input)`                                | Returns `true` if the generated color is cold/cool (combined HSL hue + RGB score < 0)                                        |
| `mood(input)`                                  | Returns an array of mood/atmosphere names (in English) based on HSL rules, or `[]` if none match                             |
| `isReadableForBlindness(colorA, colorB, type)` | Checks color readability for protanopia, deuteranopia, tritanopia using Brettel/Vienot simulation + WCAG contrast            |

### Luminance & Light/Dark helpers

```js
const hex = generateColor("gold");
// hex → "#ffd700"

relativeLuminance(hex);
// → 0.699 (bright color)

isLight(hex);
// → true

isDark(hex);
// → false
```

> **Note:** `isLight` and `isDark` are complementary — a color is either light *or* dark, never both, never neither. The threshold is a relative luminance of **0.5**.

### Temperature (Warm/Cool) helpers

#### `temperature(input)` — 7 Temperature Levels

Returns the temperature level of a color as one of 7 strings: `VeryHot`, `Hot`, `Neutral Hot`, `Neutral`, `Neutral Cold`, `Cold`, or `VeryCold`.

```js
temperature("red");       // → "VeryHot"      — hue 0° (+1), R >> B (+1)
temperature("gold");      // → "VeryHot"      — hue 51° (+0.43), R >> B (+1)
temperature("tomato");    // → "VeryHot"      — hue 9° (+0.9), R >> B (+0.72)
temperature("pink");      // → "Hot"          — hue 350° (+0.67), R > B (+0.2)
temperature("chartreuse");// → "Neutral Hot"  — hue 90° (0), R > B (+0.5)
temperature("gray");      // → "Neutral"      — achromatic, R = B (0)
temperature("green");     // → "Neutral Cold" — hue 120° (-0.25), R = B (0)
temperature("magenta");   // → "Neutral Cold" — hue 300° (-0.25), R = B (0)
temperature("purple");    // → "Neutral Cold" — hue 270° (-0.5), R = B (0)
temperature("aquamarine");// → "Cold"         — hue 160° (-0.58), R < B (-0.33)
temperature("blue");      // → "VeryCold"     — hue 240° (-0.75), R << B (-1)
temperature("cyan");      // → "VeryCold"     — hue 180° (-0.75), R << B (-1)
```

#### `isHot(input)` / `isCold(input)` — Boolean helpers

```js
isHot("red");     // → true   (red is warm — hue 0°, R > B)
isCold("red");    // → false

isHot("blue");    // → false
isCold("blue");   // → true   (blue is cool — hue 240°, R < B)

isHot("gold");    // → true   (gold is warm — hue 51°, R >> B)
isCold("gold");   // → false

isHot("cyan");    // → false
isCold("cyan");   // → true   (cyan is cool — hue 180°, R < B)

isHot("gray");    // → false  (gray is achromatic, neutral)
isCold("gray");   // → false

isHot("tomato");  // → true   (warm red-orange)
isCold("#1E90FF");// → true   (Dodger Blue is cool)
```

> **Note:** `temperature`, `isHot` and `isCold` use the same two-factor scoring system:
> 1. **HSL Hue** — uses a continuous piecewise function: 0°–90° warm (descending +1→0), 90°–210° cooling (0→-1), 210°–330° warming (-1→0), 330°–360° warm (0→+1). Achromatic colors (saturation = 0) get 0.
> 2. **Direct RGB** — `V = (R - B) / 255`, ranging from -1 (blue ≫ red) to +1 (red ≫ blue).
>
> The two factors are averaged into a continuous score from -1 (coldest) to +1 (warmest). `temperature()` maps this score to 7 distinct levels. `isHot` returns `true` when the discrete warmScore (same as the original algorithm) > 0. `isCold` returns `true` when warmScore < 0. If warmScore = 0, both return `false` (neutral color).
>
> The continuous scoring used by `temperature()` provides finer granularity than the discrete `isHot`/`isCold` system, which means `temperature()` can detect subtle warm/cool leans even when `isHot` and `isCold` both return `false`.

### `mood(input)` — Color Mood / Atmosphere Classification

Returns an array of **mood** (atmosphere) names in English that best describe the generated color, based on mathematical rules in HSL space. If no mood matches (exact or by proximity), returns an empty array `[]`.

```js
mood("#FF4500");        // ["Vibrant"]                        — OrangeRed
mood("#0000FF");        // ["Futuristic"]                     — pure blue
mood("#4682B4");        // ["Calm","Corporate","Sophisticated"] — Steel Blue
mood("#1A1A1A");        // ["Corporate"]                      — near-black gray
mood("#FFFFFF");        // ["Corporate"]                      — white (S &lt; 10)
mood("invalid");        // []                                 — invalid
```

**How it works:**

1. Generates the color via `generateColor(input)` and converts it to HSL.
2. Checks exact rules — if the color's H, S, L values fit one or more mood definitions exactly, those moods are returned.
3. If no exact match is found, uses a **proximity scoring** system that calculates how close the HSL values are to each mood's ideal ranges, then returns moods above a threshold.
4. If no mood scores high enough, returns `[]`.

**The 10 moods:**

| Mood          | HSL Rule (Exact)                       | Description                                  |
| ------------- | -------------------------------------- | -------------------------------------------- |
| Vibrant       | S ≥ 80, L 50–70, H 0–60 or 330–360     | High saturation, medium lightness, warm hues |
| Futuristic    | S ≥ 90, L 45–55, H 180–220 or 280–320  | Very high saturation, cool hues              |
| Fun           | S 65–90, L 65–80                       | High saturation, high lightness (bright)     |
| Soft Pastel   | S 15–40, L 80–95                       | Low saturation, high lightness (delicate)    |
| Calm          | H 160–260, S 20–50, L 60–85            | Cool hues, serene                            |
| Vintage       | H 20–50, S 30–50, L 40–60              | Warm muted hues, retro feel                  |
| Organic       | H 30–45 or 90–140, S 40–60, L 40–55    | Earthy greens & warm hues                    |
| Sophisticated | S 40–75, L 10–35                       | Medium saturation, deep elegant colors       |
| Dark          | S 5–25, L 10–25                        | Near-black muted colors                      |
| Corporate     | (H 210–230 & S 10–30) or S < 10 (gray) | Low-saturation blue or pure grays            |

## Input Types

### 1) Arrays (recursive)

When the input is an array, `generateColor` is called on each element recursively, returning an array of colors:

```js
generateColor(["Lucas", "Maria", 42]);
// -> ["#e2a1a8", "#6c8bbf", "#422b00"] (example)
```

Nested arrays also work:

```js
generateColor([["Lucas", "Maria"], [1, 2]]);
// -> [["#e2a1a8", "#6c8bbf"], ["#0048BA", "#7CB0A1"]]
```

### 2) Known color name (built-in database)

Accepts names from an extensive color list (hundreds of entries):

```js
generateColor("Absolute Zero"); // -> "#0048BA"
generateColor("zaffre");        // -> "#0014A8"
```

Also performs fuzzy matching:

```js
generateColor("absolut zero"); // -> "#0048BA" (similar name)
```

### 3) Numeric index from the internal table

If the input is a number, the plugin looks up by the array index. If the index is out of range, a deterministic color is generated from the number itself:

```js
generateColor(1);   // -> "#0048BA"
generateColor(974); // -> "#39A78E"
generateColor(9999); // -> "#0f2700" (deterministic fallback)
```

### 4) HEX values

If the input is already HEX (with or without `#`), it is returned normalized:

```js
generateColor("#ff00aa"); // -> "#ff00aa"
generateColor("ff00aa");  // -> "#ff00aa"
generateColor("f0a");     // -> "#f0a"
```

### 5) RGB and RGBA values

Converts RGB/RGBA strings to hexadecimal:

```js
generateColor("rgb(255, 99, 71)");       // -> "#ff6347"
generateColor("rgba(255, 99, 71, 0.5)"); // -> "#ff634780"
```

### 6) The word "random"

Returns a random color on each call:

```js
generateColor("random"); // -> "#a3f2c1" (example)
```

### 7) Valid CSS color names

If the browser recognizes the string as a valid CSS color, the plugin returns it in hexadecimal format:

```js
generateColor("tomato");
generateColor("rebeccapurple");
```

### 8) Generic text (deterministic fallback)

When none of the above apply, the color is generated by a simple hash of the string:

```js
generateColor("Lucas"); // -> always the same color for "Lucas"
generateColor("Maria"); // -> always the same color for "Maria"
```

### 9) Objects (non-array, non-element)

Any other object type is converted to string and processed:

```js
generateColor({ toString: () => "Lucas" }); // -> same as generateColor("Lucas")
```

### 10) Empty input

Empty, `null`, or `undefined` inputs return a **random** color:

```js
generateColor("");
generateColor(null);
generateColor(undefined);
// -> "#a3f2c1" (example — random each time)
```

### 11) HTML Elements

When passing an HTML element, the function applies the generated color (based on `textContent`) directly to the element's `color` property and returns the color:

```js
const el = document.getElementById("username");
generateColor(el);
// el.style.color is now set to the generated color
```

Or as a loop selector:

```js
document.querySelectorAll(".tag").forEach(el => generateColor(el));
```

## Processing Order

1. HTML Element
2. Array (recursive)
3. Number (array index, then deterministic fallback)
4. Object (converted to string)
5. Empty input
6. `"random"`
7. Valid CSS color
8. HEX
9. RGB
10. RGBA
11. Exact name match in database
12. Contains name match in database
13. Levenshtein fuzzy name match in database
14. Deterministic hash

## Features

- **Deterministic** text fallback — the same input always produces the same color.
- **Built-in database** with 2000+ named colors (2254+ entries), searchable by name (exact, contains, or fuzzy via Levenshtein) or numeric index.
- **Color name lookup**: `colorName()`, `colorNames()`, `closestName()`, `closestNames()` for finding color names from any input.
- **Color harmonies**: `generateInvertedColor()`, `generateComplementary()`, `generateTriadic()`, `generateSquare()`, `generateSplitComplementary()` for color scheme exploration.
- **Monochrome palettes**: `generateMonochrome()` creates harmonious single-hue palettes.
- **Accepts multiple formats**: Arrays (recursive), objects (converted to string), HEX (`#rgb`, `#rrggbb`), RGB, RGBA, CSS color names, `"random"`, numeric indices, and HTML elements.
- **Smart contrast**: `generateReadableColor` dynamically calculates the necessary blend ratio to guarantee **WCAG AA (4.5:1)**, resulting in text that is always readable and aesthetically harmonious.
- **Pagination**: `listColors()` allows browsing the color database with page support.
- **Utility functions**: `hexToRgb()`, `hexToHsl()`, `hslToHex()`, `relativeLuminance()`, `normalizeHex()`, `isLight()`, `isDark()` for fine-grained control.
- **Zero dependencies**: runs purely in the browser with vanilla JavaScript.
- **Small footprint**: ~38 KB minified, no `npm install` required.

## Interactive Test Page

The [interactive test page](https://zonaro.github.io/NameToColor/) includes a live playground that demonstrates all library features in real time.

### Hero Color Animation

The page header features a **Typed.js** animation that cycles through random text items (color names, hex codes, and arbitrary words) inside `<kbd>` elements. As each character is typed:

1. `generateColor()` is called with the current partial text.
2. The resulting color is applied as the background of both `<kbd>` elements.
3. `generateReadableColor()` ensures the text remains legible with proper contrast.

This creates a live, evolving color preview that changes with every keystroke — demonstrating how `generateColor()` produces different colors for different text inputs, even partial strings.

> **Note:** The Typed.js library (`typed.js@2.0.12`) is loaded from CDN and is only used on the demo page. It is **not** a dependency of the core `NameToColor.js` library.

## License

MIT
