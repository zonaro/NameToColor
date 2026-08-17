/**
 * NameToColor — Vercel Serverless Function (REST API).
 *
 * Endpoint:  GET /api/color?name=palavra
 * Response:  { "input": "palavra", "color": "#hexadecimal" }
 *
 * The core library is browser-first, so it is imported through CommonJS.
 * Browser-only APIs (HTMLElement, Option, document) are guarded inside
 * NameToColor.js, which lets the same file run in Node.js here and in the
 * browser via a plain <script> tag.
 */
const { generateColor } = require('../lib/with-ptbr.js');

/**
 * Vercel serverless handler.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
module.exports = function handler(req, res) {
    // ── CORS: allow any origin, method, or header so external sites and
    //    plugins can consume the API directly from the browser. ──
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');

    // ── Preflight (CORS) request ──
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    // ── Only GET is supported ──
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
            error: 'Method not allowed. Use GET /api/color?name=palavra'
        }));
        return;
    }

    // ── Read and validate the "name" query parameter ──
    const rawName = req.query && req.query.name;
    const name = typeof rawName === 'string' ? rawName.trim() : '';

    if (!name) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
            error: 'Missing required query parameter "name". Example: /api/color?name=palavra'
        }));
        return;
    }

    // ── Generate the deterministic color and return it ──
    const color = generateColor(name);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({
        input: name,
        color: color
    }));
};