/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/hexToHsl?input=%23ff6347
 * Response:  { "input": "#ff6347", "result": { "h": 9, "s": 100, "l": 64 } }
 */
const { hexToHsl } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/hexToHsl?input=%23ff6347')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/hexToHsl?input=%23ff6347' });
        return;
    }

    const result = hexToHsl(input);
    sendJson(res, 200, { input: input, result: result });
};