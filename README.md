# NameToColor — Multi-Language Library

> Shared contract (`generateColor`, `listColors`, `mood`, `temperature`, `isReadableForBlindness`) across **JavaScript** (Vercel + CDN), **Dart / Flutter**, **PHP**, and **C#**. Core and interface are always separated. All submodules read from `shared/colors.json` and `shared/languages.json`.

---

## Shared base

- `shared/colors.json` — 2,254 hex → [names]
- `shared/languages.json` — language packs (`pt-BR`) with aliases, moods, temperature, theme mappings, translated names
- `shared/README.md` — notes on the shared contract

---

## Submodules

### JavaScript — `js/`

**Core (full contract):** `js/nameToColor.js`
- Reads `shared/colors.json` when `require('fs')` is available (Vercel / Node / local); keeps embedded DB for CDN/browser fallback.
- All original functions preserved: `generateColor`, `generateReadableColor`, `generateThemePalette`, `listColors`, `colorName`, `colorNames`, `closestName`, `closestNames`, `generateInvertedColor`, `generateComplementary`, `generateTriadic`, `generateSquare`, `generateSplitComplementary`, `generateMonochrome`, `blendColors`, `averageColors`, `hexToRgb`, `hexToHsl`, `hslToHex`, `normalizeHex`, `relativeLuminance`, `isLight`, `isDark`, `isHot`, `isCold`, `temperature`, `mood`, `isReadableForBlindness`, `registerNameToColorLanguage`, `listNameToColorLanguages`.
- Exported for CommonJS (`require`) and exposed globally for browser.

**DOM interface (separate file):** `js/dom.js`
- `applyToElement(element, fn)` — applies library function to an HTML element's text.
- `applyGenerateColorToElement(element)`
- `applyReadableColorToElement(element)`

**Usage — CDN (browser):**
```html
<script src="js/nameToColor.js"></script>
<script>console.log(generateColor("hello"));</script>
```

**Usage — Vercel / Node:**
```js
const lib = require('./js/nameToColor.js');
console.log(lib.generateColor('hello'));
```

---

### Dart — `dart/`

**Core:** `dart/lib/nameToColor.dart`
- Reads `shared/colors.json`.
- Contract functions: `generateColor`, `generateReadableColor`, `generateThemePalette`, `listColors`, `colorName`, `colorNames`, `closestName`, `closestNames`, `generateInvertedColor`, `generateComplementary`, `generateTriadic`, `generateSquare`, `generateSplitComplementary`, `generateMonochrome`, `blendColors` (via helper), `hexToRgb`, `hexToHsl`, `hslToHex`, `normalizeHex`, `isLight`, `isDark`, `isHot`, `isCold`, `temperature`, `mood`, `isReadableForBlindness`, `registerNameToColorLanguage`, `listNameToColorLanguages`, `getNameToColorLanguageColorNames`, `localizeNameToColorMoods`, `localizeNameToColorTemperature`.

**Widget interface (DOM equivalent):** `dart/lib/dom.dart`
- `NameToColorWidget` — Flutter widget displaying input and generated color.
- `NameToColorText` — text widget with customizable style.

**Usage:**
```dart
import 'nameToColor.dart';
import 'dom.dart';
final hex = NameToColor.generateColor("hello");
```

---

### PHP — `php/`

**Core (only):** `php/src/nameToColor.php`
- Class-based contract (`NameToColor::generateColor`, `NameToColor::colorName`, `NameToColor::listColors`, etc.).
- Reads `shared/colors.json` and `shared/languages.json`.
- No DOM module (not needed for PHP server-side use).

**Usage:**
```php
require 'php/src/nameToColor.php';
$hex = NameToColor::generateColor('hello');
$names = NameToColor::colorNames('#FFBF00');
```

---

### C# — `cs/`

**Core (only):** `cs/NameToColor/NameToColor.cs`
- Compiled library (`dotnet build`).
- Reads `shared/colors.json` and `shared/languages.json`.
- Full contract exposed via `NameToColorCore` static class.

**Usage:**
```csharp
using NameToColor;
var hex = NameToColorCore.GenerateColor("hello");
var names = NameToColorCore.ColorNames("#FFBF00");
```

---

## Contract comparison

| Function | JS (full) | Dart (core) | PHP (core) | C# (core) |
|---|---|---|---|---|
| `generateColor` | ✅ | ✅ | ✅ | ✅ |
| `generateReadableColor` | ✅ | ✅ | ✅ | ✅ |
| `generateThemePalette` | ✅ | ✅ | ✅ | ✅ |
| `listColors` | ✅ | ✅ | ✅ | ✅ |
| `colorName` | ✅ | ✅ | ✅ | ✅ |
| `colorNames` | ✅ | ✅ | ✅ | ✅ |
| `closestName` / `closestNames` | ✅ | ✅ | ✅ | ✅ |
| `generateInvertedColor` | ✅ | ✅ | ✅ | ✅ |
| `generateComplementary` | ✅ | ✅ | ✅ | ✅ |
| `generateTriadic` | ✅ | ✅ | ✅ | ✅ |
| `generateSquare` | ✅ | ✅ | ✅ | ✅ |
| `generateSplitComplementary` | ✅ | ✅ | ✅ | ✅ |
| `generateMonochrome` | ✅ | ✅ | ✅ | ✅ |
| `hexToRgb` / `hexToHsl` / `hslToHex` | ✅ | ✅ | ✅ | ✅ |
| `normalizeHex` | ✅ | ✅ | ✅ | ✅ |
| `isLight` / `isDark` | ✅ | ✅ | ✅ | ✅ |
| `isHot` / `isCold` | ✅ | ✅ | ✅ | ✅ |
| `temperature` / `mood` | ✅ (localized) | ✅ | ✅ | ✅ |
| `relativeLuminance` | ✅ | ✅ | ✅ | ✅ |
| `blendColors` / `averageColors` | ✅ | ✅ (internal) | ✅ | ✅ |
| `isReadableForBlindness` | ✅ (full) | ✅ (simulated) | ✅ (simulated) | ✅ (simulated) |
| `registerNameToColorLanguage` | ✅ | ✅ | ✅ | ✅ |
| `listNameToColorLanguages` | ✅ | ✅ | ✅ | ✅ |
| `getNameToColorLanguageColorNames` | ✅ | ✅ | ✅ | ✅ |
| DOM / Widget file | `js/dom.js` | `dart/lib/dom.dart` | — | — |

---

## Documentation

- **Project docs:** `README.md` (this file) + `index.html` (landing page for browsers)
- **LLM docs:** `llms.txt` — concise reference for agents
- **Library source docs:** inline comments in `NameToColor.js` (original), `js/nameToColor.js`, `dart/lib/nameToColor.dart`, `php/src/nameToColor.php`, `cs/NameToColor/NameToColor.cs`

---

## Deployment notes

- **Vercel REST API:** `api/color.js` still works independently; the submodule `js/nameToColor.js` can replace the core import in future updates.
- **CDN:** `js/nameToColor.js` is CDN-safe (embedded DB + optional JSON loader).
- **Languages:** `shared/languages.json` can be extended with new locales without touching any submodule source.

---

## License / Author

Library by zonaro. Open-source, English-only code / multi-language docs and names.
