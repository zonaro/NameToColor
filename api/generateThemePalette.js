/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/generateThemePalette?input=Nature&count=7
 * Response:  { "input": "Nature", "count": 7, "result": ["#1b4332", ...] }
 */
const { generateThemePalette } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/generateThemePalette?input=Nature&count=7')) return;

    const query = req.query || {};
    const rawInput = query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/generateThemePalette?input=Nature&count=7' });
        return;
    }

    const count = query.count !== undefined && query.count !== '' ? Number(query.count) : undefined;
    const result = generateThemePalette(input, count);
    sendJson(res, 200, { input: input, count: count, result: result });
};