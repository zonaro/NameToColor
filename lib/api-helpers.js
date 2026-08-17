/**
 * NameToColor — Shared HTTP helpers for the Vercel serverless functions.
 *
 * This module only handles HTTP plumbing (CORS headers, preflight, method
 * checks, and JSON responses). Each endpoint in /api calls its own library
 * function explicitly — there is no generic dispatcher here.
 */

/**
 * Sets the CORS headers so any origin can call the API from the browser.
 * @param {import('http').ServerResponse} res
 */
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
}

/**
 * Sends a JSON response with the given status code.
 * @param {import('http').ServerResponse} res
 * @param {number} statusCode
 * @param {*} data
 */
function sendJson(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
}

/**
 * Handles the CORS preflight (OPTIONS) request. Returns true when handled.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @returns {boolean}
 */
function handlePreflight(req, res) {
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return true;
    }
    return false;
}

/**
 * Rejects non-GET requests with a 405. Returns true when the request is GET.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @param {string} path - Example path shown in the error message.
 * @returns {boolean}
 */
function ensureGet(req, res, path) {
    if (req.method !== 'GET') {
        sendJson(res, 405, { error: 'Method not allowed. Use GET ' + path });
        return false;
    }
    return true;
}

module.exports = { setCorsHeaders, sendJson, handlePreflight, ensureGet };