/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/listNameToColorLanguages
 * Response:  { "result": [{ "locale": "en", "name": "English", "native": true }] }
 */
const { listNameToColorLanguages } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/listNameToColorLanguages')) return;

    const result = listNameToColorLanguages();
    sendJson(res, 200, { result: result });
};