/**
 * NameToColor — shared entry point for the Vercel serverless API.
 *
 * Loads the English core library and registers the Brazilian Portuguese
 * language pack, so every endpoint understands Portuguese color names,
 * modifiers, theme aliases, and localized labels out of the box.
 *
 * Endpoints import from here instead of directly from ../NameToColor.js:
 *
 *     const { mood } = require('../lib/with-ptbr.js');
 */
const lib = require('../NameToColor.js');
require('../NameToColor.ptBR.js').register(lib);

module.exports = lib;