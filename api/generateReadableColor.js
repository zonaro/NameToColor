/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateReadableColor?input=tomato
 * Response:  { "input": "tomato", "result": ["#522017", "#FF6347"] }
 */
const { generateReadableColor } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateReadableColor?input=tomato')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateReadableColor?input=tomato' });
        return;
    }

    const result = generateReadableColor(input);
    sendJson(res, 200, { input: input, result: result });
};