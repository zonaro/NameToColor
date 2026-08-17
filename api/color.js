/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Single dispatcher endpoint. The Vercel Hobby plan limits a deployment to
 * 12 Serverless Functions, so every DOM-free public function of the library
 * is exposed through ONE endpoint instead of one file per function.
 *
 * Endpoint:  GET /api/color?func=colorName&input=tomato&locale=pt-BR
 * Response:  { "func": "colorName", "input": "tomato", "locale": "pt-BR", "result": "Tomato" }
 *
 * The `func` query parameter selects the library function to call; every
 * other query parameter is passed to that function. When `func` is omitted,
 * ALL basic functions are executed at once and the response is an object
 * mapping each function name to its result, e.g.
 * { "generateColor": "#ff0000", "colorName": "Red", ... }. In batch mode
 * `count` defaults to 5 and `locale` defaults to an empty string (English).
 *
 * The core library is browser-first, so it is imported through CommonJS.
 * Browser-only APIs (HTMLElement, Option, document) are guarded inside
 * NameToColor.js, which lets the same file run in Node.js here and in the
 * browser via a plain <script> tag.
 */
const lib = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

// Query parameters that must be parsed as numbers (everything else is a
// trimmed string).
const NUMERIC_PARAMS = ['page', 'size', 'count', 'h', 's', 'l'];

// Registry of every DOM-free public function exposed through the API.
// `required` params must be present; `optional` params are passed when given.
const FUNCTIONS = {
    generateColor: { fn: lib.generateColor, required: ['name'] },
    colorName: { fn: lib.colorName, required: ['input'], optional: ['locale'] },
    colorNames: { fn: lib.colorNames, required: ['input'], optional: ['locale'] },
    closestName: { fn: lib.closestName, required: ['input'], optional: ['locale'] },
    closestNames: { fn: lib.closestNames, required: ['input'], optional: ['locale'] },
    mood: { fn: lib.mood, required: ['input'], optional: ['locale'] },
    listColors: { fn: lib.listColors, optional: ['page', 'size', 'locale'] },
    listNameToColorLanguages: { fn: lib.listNameToColorLanguages },
    generateComplementary: { fn: lib.generateComplementary, required: ['input'] },
    generateInvertedColor: { fn: lib.generateInvertedColor, required: ['input'] },
    generateMonochrome: { fn: lib.generateMonochrome, required: ['input'], optional: ['count'] },
    generateReadableColor: { fn: lib.generateReadableColor, required: ['input'] },
    generateSplitComplementary: { fn: lib.generateSplitComplementary, required: ['input'] },
    generateSquare: { fn: lib.generateSquare, required: ['input'] },
    generateThemePalette: { fn: lib.generateThemePalette, required: ['input'], optional: ['count'] },
    generateTriadic: { fn: lib.generateTriadic, required: ['input'] },
    hexToHsl: { fn: lib.hexToHsl, required: ['input'] },
    hexToRgb: { fn: lib.hexToRgb, required: ['input'] },
    hslToHex: { fn: lib.hslToHex, required: ['h', 's', 'l'] },
    isCold: { fn: lib.isCold, required: ['input'] },
    isDark: { fn: lib.isDark, required: ['input'] },
    isHot: { fn: lib.isHot, required: ['input'] },
    isLight: { fn: lib.isLight, required: ['input'] },
    isReadableForBlindness: { fn: lib.isReadableForBlindness, required: ['colorA', 'colorB', 'type'] },
    normalizeHex: { fn: lib.normalizeHex, required: ['input'] },
    relativeLuminance: { fn: lib.relativeLuminance, required: ['input'] },
    temperature: { fn: lib.temperature, required: ['input'] },
    colorDatabase: { data: true }
};

// Basic functions executed together when `func` is omitted. Each entry lists
// the params it needs; functions whose required params are missing are
// skipped in batch mode.
const BASIC_FUNCTIONS = [
    // generateColor always runs in batch mode: without `name` it produces a
    // deterministic random color (generateColor("") behavior).
    { name: 'generateColor', optional: ['name'] },
    { name: 'generateReadableColor', required: ['input'] },
    { name: 'generateThemePalette', required: ['input'], optional: ['count'] },
    { name: 'colorName', required: ['input'], optional: ['locale'] },
    { name: 'colorNames', required: ['input'], optional: ['locale'] },
    { name: 'closestName', required: ['input'], optional: ['locale'] },
    { name: 'closestNames', required: ['input'], optional: ['locale'] },
    { name: 'generateInvertedColor', required: ['input'] },
    { name: 'generateComplementary', required: ['input'] },
    { name: 'generateTriadic', required: ['input'] },
    { name: 'generateSquare', required: ['input'] },
    { name: 'generateSplitComplementary', required: ['input'] },
    { name: 'generateMonochrome', required: ['input'], optional: ['count'] },
    { name: 'relativeLuminance', required: ['input'] },
    { name: 'normalizeHex', required: ['input'] },
    { name: 'isLight', required: ['input'] },
    { name: 'isDark', required: ['input'] },
    { name: 'isHot', required: ['input'] },
    { name: 'isCold', required: ['input'] },
    { name: 'temperature', required: ['input'] },
    { name: 'mood', required: ['input'], optional: ['locale'] }
];

/**
 * Vercel serverless handler.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/color?func=colorName&input=tomato&locale=pt-BR')) return;

    const query = req.query || {};
    const funcName = typeof query.func === 'string' ? query.func.trim() : '';

    // Batch mode: when `func` is omitted, run every basic function whose
    // required params are present and return { functionName: result }.
    if (!funcName) {
        const results = {};
        // When there is no explicit input (missing, empty or "random"), resolve
        // the base color ONCE so every function derives from the same color
        // instead of each generating its own. A provided `name` anchors the base.
        const rawInput = query.input;
        const hasName = query.name !== undefined && query.name !== '';
        const needsBase = hasName || rawInput === undefined || rawInput === '' || String(rawInput).trim().toLowerCase() === 'random';
        let baseInput = rawInput;
        if (needsBase) {
            baseInput = lib.generateColor(hasName ? query.name : rawInput);
        }
        for (let i = 0; i < BASIC_FUNCTIONS.length; i++) {
            const entry = BASIC_FUNCTIONS[i];
            const spec = FUNCTIONS[entry.name];
            const required = entry.required || [];
            const optional = entry.optional || [];
            const allParams = required.concat(optional);
            const params = {};
            let missing = false;

            for (let j = 0; j < allParams.length; j++) {
                const key = allParams[j];
                let raw = query[key];
                if (key === 'count' && (raw === undefined || raw === '')) raw = '5';
                if (key === 'locale' && (raw === undefined || raw === '')) raw = '';
                if (key === 'input' && needsBase) raw = baseInput;
                if (key === 'name' && (raw === undefined || raw === '') && needsBase) raw = baseInput;
                if (raw === undefined || raw === '') {
                    if (required.indexOf(key) !== -1) { missing = true; break; }
                    continue;
                }
                params[key] = NUMERIC_PARAMS.indexOf(key) !== -1 ? Number(raw) : String(raw).trim();
            }

            if (missing) continue;

            try {
                const args = allParams.map(function (key) { return params[key]; });
                results[entry.name] = spec.fn.apply(null, args);
            } catch (err) {
                results[entry.name] = null;
            }
        }
        sendJson(res, 200, results);
        return;
    }

    const spec = FUNCTIONS[funcName];
    if (!spec) {
        sendJson(res, 400, {
            error: 'Unknown function "' + funcName + '".',
            available: Object.keys(FUNCTIONS)
        });
        return;
    }

    // Data-only entries (e.g. colorDatabase) have no function to call.
    if (spec.data) {
        sendJson(res, 200, { func: funcName, result: lib.colorDatabase });
        return;
    }

    // Collect and parse the function's parameters.
    const required = spec.required || [];
    const optional = spec.optional || [];
    const allParams = required.concat(optional);
    const params = {};

    for (let i = 0; i < allParams.length; i++) {
        const key = allParams[i];
        const raw = query[key];
        if (raw === undefined || raw === '') {
            if (required.indexOf(key) !== -1) {
                sendJson(res, 400, {
                    error: 'Missing required query parameter "' + key + '" for function "' + funcName + '". Example: /api/color?func=' + funcName + '&' + key + '=...'
                });
                return;
            }
            continue;
        }
        params[key] = NUMERIC_PARAMS.indexOf(key) !== -1 ? Number(raw) : String(raw).trim();
    }

    // Call the function with its params in declaration order.
    let result;
    try {
        const args = allParams.map(function (key) { return params[key]; });
        result = spec.fn.apply(null, args);
    } catch (err) {
        sendJson(res, 400, {
            error: 'Function "' + funcName + '" failed: ' + (err && err.message ? err.message : String(err))
        });
        return;
    }

    // Response mirrors the request: { func, ...params, result }.
    const response = { func: funcName };
    for (let i = 0; i < allParams.length; i++) {
        const key = allParams[i];
        if (params[key] !== undefined) response[key] = params[key];
    }
    response.result = result;
    sendJson(res, 200, response);
};