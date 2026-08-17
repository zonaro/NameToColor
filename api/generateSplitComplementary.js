/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateSplitComplementary?input=tomato
 * Response:  { "input": "tomato", "result": ["#ff6347", "#47e3ff", "#47ffb8"] }
 */
const { generateSplitComplementary } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateSplitComplementary?input=tomato')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateSplitComplementary?input=tomato' });
        return;
    }

    const result = generateSplitComplementary(input);
    sendJson(res, 200, { input: input, result: result });
};