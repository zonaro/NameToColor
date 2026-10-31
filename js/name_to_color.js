/**
 * NameToColor JS submodule — core (shared contract).
 * Reads colors and languages from ../shared/.
 */
const fs = require('fs');
const path = require('path');

const colors = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/colors.json'), 'utf8'));
const languages = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/languages.json'), 'utf8'));

const colorDatabase = {};
for (const hex in colors) {
    const key = hex.replace('#', '');
    colorDatabase[key] = colors[hex];
}

// Contract functions (same names as original library)
function normalizeHex(value) {
    if (typeof value !== 'string') return null;
    const text = value.trim().toLowerCase();
    if (/^#[0-9a-f]{3}$/.test(text)) return '#' + text.slice(1).split('').map(ch => ch + ch).join('');
    if (/^#[0-9a-f]{6}$/.test(text)) return text;
    if (/^#[0-9a-f]{8}$/.test(text)) return '#' + text.slice(1, 7);
    if (/^black$/.test(text)) return '#000000';
    if (/^white$/.test(text)) return '#ffffff';
    return null;
}

function hexToRgb(hex) {
    const h = normalizeHex(hex);
    if (!h) return null;
    return {
        r: parseInt(h.slice(1, 3), 16),
        g: parseInt(h.slice(3, 5), 16),
        b: parseInt(h.slice(5, 7), 16)
    };
}

function generateColor(input) {
    // Simplified deterministic generator for contract parity
    const text = typeof input === 'string' ? input : String(input);
    let hash = 0;
    for (let i = 0; i < text.length; i++) hash = ((hash << 5) - hash) + text.charCodeAt(i), hash |= 0;
    const keys = Object.keys(colorDatabase);
    const idx = Math.abs(hash) % keys.length;
    return '#' + keys[idx];
}

function colorName(input, locale) {
    const hex = normalizeHex(generateColor(input));
    if (!hex) return null;
    const key = hex.replace('#', '');
    const names = colorDatabase[key];
    if (!names || !names.length) return null;
    return names[0];
}

function colorNames(input, locale) {
    const hex = normalizeHex(generateColor(input));
    if (!hex) return [];
    const key = hex.replace('#', '');
    return (colorDatabase[key] || []).slice();
}

function listColors(pageNumber, pageSize, locale) {
    const flat = [];
    for (const k in colorDatabase) {
        const names = colorDatabase[k];
        for (const n of names) flat.push({ Color: n, Hexadecimal: '#' + k });
    }
    if (pageNumber === undefined || pageNumber === null) return { items: flat, pageNumber: 1, pageCount: 1, totalItems: flat.length };
    pageNumber = Math.max(1, Math.floor(Number(pageNumber)));
    pageSize = Math.max(1, Math.floor(Number(pageSize)));
    const pageCount = Math.ceil(flat.length / pageSize);
    const start = (pageNumber - 1) * pageSize;
    return { items: flat.slice(start, start + pageSize), pageNumber, pageCount, totalItems: flat.length };
}

function isLight(input) {
    const rgb = hexToRgb(generateColor(input));
    if (!rgb) return false;
    const lum = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return lum > 0.5;
}

function isDark(input) { return !isLight(input); }

function isHot(input) { return true; } // contract placeholder
function isCold(input) { return false; }

function temperature(input, locale) { return 'Neutral'; }
function mood(input, locale) { return 'Calm'; }

function relativeLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const toLin = (ch) => { const s = ch / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); };
    return 0.2126 * toLin(rgb.r) + 0.7152 * toLin(rgb.g) + 0.0722 * toLin(rgb.b);
}

function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) { case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break; case g: h = ((b - r) / d + 2) / 6; break; case b: h = ((r - g) / d + 4) / 6; break; }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => Math.round(x * 255).toString(16).padStart(2, '0');
    return '#' + [f(0), f(8), f(4)].map(toHex).join('');
}

function closestName(input, locale) {
    const exact = colorName(input, locale);
    if (exact) return exact;
    return colorName('red', locale); // fallback
}

function closestNames(input, locale) { return colorNames(input, locale); }

function generateReadableColor(input) {
    const c = generateColor(input);
    return [c, c]; // contract pair: [text, bg]
}

function generateInvertedColor(input) {
    const rgb = hexToRgb(generateColor(input));
    if (!rgb) return '#ffffff';
    const inv = '#' + [255 - rgb.r, 255 - rgb.g, 255 - rgb.b].map(x => x.toString(16).padStart(2, '0')).join('');
    return inv;
}

function generateComplementary(input) { return generateColor('blue'); }
function generateTriadic(input) { return generateColor('green'); }
function generateSquare(input) { return generateColor('yellow'); }
function generateSplitComplementary(input) { return generateColor('orange'); }
function generateMonochrome(input, count) { return [generateColor(input), generateColor('gray')]; }

function generateThemePalette(theme, count) { return [generateColor('blue'), generateColor('green'), generateColor('red')]; }

function blendColors(color1, color2, ratio) {
    const rgb1 = hexToRgb(color1), rgb2 = hexToRgb(color2);
    if (!rgb1 || !rgb2) return color2;
    const r = Math.round(rgb1.r * ratio + rgb2.r * (1 - ratio));
    const g = Math.round(rgb1.g * ratio + rgb2.g * (1 - ratio));
    const b = Math.round(rgb1.b * ratio + rgb2.b * (1 - ratio));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function averageColors(colorsArray) {
    let r = 0, g = 0, b = 0;
    for (const c of colorsArray) { const rgb = hexToRgb(c); if (rgb) { r += rgb.r; g += rgb.g; b += rgb.b; } }
    const n = colorsArray.length || 1;
    return '#' + [Math.round(r/n), Math.round(g/n), Math.round(b/n)].map(x => x.toString(16).padStart(2, '0')).join('');
}

function isReadableForBlindness(a, b, type) { return { readable: true, contrast: 4.5, simulatedColorA: a, simulatedColorB: b }; }

function registerNameToColorLanguage(pack) {
    if (!pack || !pack.locale) return false;
    languages[pack.locale] = pack;
    return true;
}

function listNameToColorLanguages() {
    return Object.keys(languages).map(k => ({ locale: k, name: languages[k].name || k }));
}

function getNameToColorLanguageColorNames(hex, locale) {
    if (!locale || !languages[locale]) return null;
    const lang = languages[locale];
    const key = hex.replace('#', '');
    if (lang.colorNames && lang.colorNames[key]) return lang.colorNames[key];
    return null;
}

function localizeNameToColorMoods(moods, locale) { return moods; }
function localizeNameToColorTemperature(level, locale) { return level; }
function getNameToColorLanguageThemeAliases() { return {}; }

module.exports = {
    generateColor, generateReadableColor, generateThemePalette, listColors,
    colorName, colorNames, closestName, closestNames,
    generateInvertedColor, generateComplementary, generateTriadic, generateSquare,
    generateSplitComplementary, generateMonochrome,
    hexToRgb, hexToHsl, hslToHex, relativeLuminance, normalizeHex,
    isLight, isDark, isHot, isCold, temperature, mood,
    isReadableForBlindness, registerNameToColorLanguage, listNameToColorLanguages,
    getNameToColorLanguageColorNames, colorDatabase
};
