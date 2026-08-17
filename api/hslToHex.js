/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/hslToHex?h=9&s=100&l=64
 * Response:  { "h": 9, "s": 100, "l": 64, "result": "#ff6347" }
 */
const { hslToHex } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/hslToHex?h=9&s=100&l=64')) return;

    const query = req.query || {};
    const h = query.h !== undefined && query.h !== '' ? Number(query.h) : undefined;
    const s = query.s !== undefined && query.s !== '' ? Number(query.s) : undefined;
    const l = query.l !== undefined && query.l !== '' ? Number(query.l) : undefined;

    if (h === undefined || s === undefined || l === undefined) {
        sendJson(res, 400, { error: 'Missing required query parameter(s). Example: /api/hslToHex?h=9&s=100&l=64' });
        return;
    }

    const result = hslToHex(h, s, l);
    sendJson(res, 200, { h: h, s: s, l: l, result: result });
};