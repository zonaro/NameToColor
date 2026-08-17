/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateComplementary?input=tomato
 * Response:  { "input": "tomato", "result": "#47e3ff" }
 */
const { generateComplementary } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateComplementary?input=tomato')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateComplementary?input=tomato' });
        return;
    }

    const result = generateComplementary(input);
    sendJson(res, 200, { input: input, result: result });
};