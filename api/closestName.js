/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/closestName?input=spanish%20sky&locale=pt-BR
 * Response:  { "input": "spanish sky", "locale": "pt-BR", "result": "Aqua" }
 */
const { closestName } = require('../lib/with-ptbr.js');
const { setCorsHeaders, sendJson, handlePreflight, ensureGet } = require('../lib/api-helpers.js');

module.exports = function handler(req, res) {
    setCorsHeaders(res);
    if (handlePreflight(req, res)) return;
    if (!ensureGet(req, res, '/api/closestName?input=spanish%20sky&locale=pt-BR')) return;

    const query = req.query || {};
    const rawInput = query.input;
    const input = typeof rawInput === 'string' ? rawInput.trim() : '';

    if (!input) {
        sendJson(res, 400, { error: 'Missing required query parameter "input". Example: /api/closestName?input=spanish%20sky&locale=pt-BR' });
        return;
    }

    const locale = query.locale;
    const result = closestName(input, locale);
    sendJson(res, 200, { input: input, locale: locale, result: result });
};