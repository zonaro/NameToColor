/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/hexToRgb?input=%23ff6347
 * Response:  { "input": "#ff6347", "result": { "r": 255, "g": 99, "b": 71 } }
 */
const { hexToRgb } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/hexToRgb?input=%23ff6347')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/hexToRgb?input=%23ff6347' });
        return;
    }

    const result = hexToRgb(input);
    sendJson(res, 200, { input: input, result: result });
};