/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/listColors?page=2&size=10
 * Response:  { "page": 2, "size": 10, "result": { "items": [...], "pageNumber": 2, "pageCount": ..., "totalItems": ... } }
 */
const { listColors } = require('../NameToColor.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/listColors?page=2&size=10')) return;

    const query = req.query || {};
    const page = query.page !== undefined && query.page !== '' ? Number(query.page) : undefined;
    const size = query.size !== undefined && query.size !== '' ? Number(query.size) : undefined;

    const result = listColors(page, size);
    sendJson(res, 200, { page: page, size: size, result: result });
};