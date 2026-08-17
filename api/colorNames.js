/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/colorNames?input=tomato&locale=pt-BR
 * Response:  { "input": "tomato", "locale": "pt-BR", "result": ["Tomato"] }
 */
const { colorNames } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/colorNames?input=tomato&locale=pt-BR')) return;

    const query = req.query || {};
    const rawInput = query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/colorNames?input=tomato&locale=pt-BR' });
        return;
    }

    const locale = query.locale;
    const result = colorNames(input, locale);
    sendJson(res, 200, { input: input, locale: locale, result: result });
};