/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/temperature?input=tomato
 * Response:  { "input": "tomato", "result": "VeryHot" }
 */
const { temperature } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/temperature?input=tomato')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/temperature?input=tomato' });
        return;
    }

    const result = temperature(input);
    sendJson(res, 200, { input: input, result: result });
};