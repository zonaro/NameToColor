/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/colorDatabase
 * Response:  { "result": { "101405": ["Green Waterloo"], ... } }
 */
const { colorDatabase } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/colorDatabase')) return;

    sendJson(res, 200, { result: colorDatabase });
};