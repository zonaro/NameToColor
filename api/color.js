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
 * other query parameter is passed to that function. For convenience, when
 * `func` is omitted but `name` is present, it defaults to `generateColor`
 * (the original /api/color?name=... URL keeps working).
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
    let funcName = typeof query.func === 'string' ? query.func.trim() : '';

    // Backward compatibility: /api/color?name=... still means generateColor.
    if (!funcName && query.name !== undefined && query.name !== '') {
        funcName = 'generateColor';
    }

    if (!funcName) {
        sendJson(res, 400, {
            error: 'Missing required query parameter "func". Example: /api/color?func=colorName&input=tomato&locale=pt-BR',
            available: Object.keys(FUNCTIONS)
        });
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