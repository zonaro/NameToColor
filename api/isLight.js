/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/isLight?input=%23ffffff
 * Response:  { "input": "#ffffff", "result": true }
 */
const { isLight } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/isLight?input=%23ffffff')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/isLight?input=%23ffffff' });
        return;
    }

    const result = isLight(input);
    sendJson(res, 200, { input: input, result: result });
};