/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateSquare?input=tomato
 * Response:  { "input": "tomato", "result": ["#ff6347", "#47ff63", "#6347ff", "#ff47e3"] }
 */
const { generateSquare } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateSquare?input=tomato')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateSquare?input=tomato' });
        return;
    }

    const result = generateSquare(input);
    sendJson(res, 200, { input: input, result: result });
};