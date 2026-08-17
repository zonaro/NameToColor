/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/isDark?input=%23000000
 * Response:  { "input": "#000000", "result": true }
 */
const { isDark } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/isDark?input=%23000000')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/isDark?input=%23000000' });
        return;
    }

    const result = isDark(input);
    sendJson(res, 200, { input: input, result: result });
};