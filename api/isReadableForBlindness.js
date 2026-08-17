/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/isReadableForBlindness?colorA=tomato&colorB=rebeccapurple&type=deuteranopia
 * Response:  { "colorA": "tomato", "colorB": "rebeccapurple", "type": "deuteranopia", "result": { "readable": true, ... } }
 */
const { isReadableForBlindness } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/isReadableForBlindness?colorA=tomato&colorB=rebeccapurple&type=deuteranopia')) return;

    const query = req.query || {};
    const colorA = query.colorA;
    const colorB = query.colorB;
    const type = query.type;

    if (!colorA || !colorB || !type) {
        sendJson(res, 400, { error: 'Missing required query parameter(s). Example: /api/isReadableForBlindness?colorA=tomato&colorB=rebeccapurple&type=deuteranopia' });
        return;
    }

    const result = isReadableForBlindness(colorA, colorB, type);
    sendJson(res, 200, { colorA: colorA, colorB: colorB, type: type, result: result });
};