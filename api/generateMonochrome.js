/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateMonochrome?input=tomato&count=6
 * Response:  { "input": "tomato", "count": 6, "result": ["#ffd8d1", ...] }
 */
const { generateMonochrome } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateMonochrome?input=tomato&count=6')) return;

    const query = req.query || {};
    const rawInput = query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateMonochrome?input=tomato&count=6' });
        return;
    }

    const count = query.count !== undefined && query.count !== '' ? Number(query.count) : undefined;
    const result = generateMonochrome(input, count);
    sendJson(res, 200, { input: input, count: count, result: result });
};