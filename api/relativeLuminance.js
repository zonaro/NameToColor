/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/relativeLuminance?input=%23ff6347
 * Response:  { "input": "#ff6347", "result": 0.3063861271941505 }
 */
const { relativeLuminance } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/relativeLuminance?input=%23ff6347')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/relativeLuminance?input=%23ff6347' });
        return;
    }

    const result = relativeLuminance(input);
    sendJson(res, 200, { input: input, result: result });
};