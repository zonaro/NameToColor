/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/normalizeHex?input=ff6347
 * Response:  { "input": "ff6347", "result": "#ff6347" }
 */
const { normalizeHex } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/normalizeHex?input=ff6347')) return;

    const rawInput = req.query && req.query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/normalizeHex?input=ff6347' });
        return;
    }

    const result = normalizeHex(input);
    sendJson(res, 200, { input: input, result: result });
};