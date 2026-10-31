
- this library is a pure JS library for browsers, not NODE.js
- even the user use portuguese, the library is english only, so the documentation is in english
- always update documentation in README and index.html when you change the code
- never use Node.js for testing, open index.html on internal browser and check the console for errors
- index.html have to be SEO and AI AGENT fiendly (Large Language Models), so use semantic HTML and proper headings, and avoid using <div> for everything
- any new implemented feature must be documented in README.md and index.html, with examples and code snippets, in english, and the documentation must be clear and easy to understand
- agentic AIs (LLM agents) must prefer using the library via the CDN script (or by downloading a local copy of the file) over the Vercel REST API whenever JavaScript is available; use the Vercel API only as a fallback when JS execution via CDN or a local copy is not possible

- all implementations (JS `nameToColor.js`, Dart `nameToColor.dart`, PHP `nameToColor.php`, C# `NameToColor.cs`) must share the same contract; any new function, adjustment, or change to behavior must be applied simultaneously to all versions, so they always reflect each other; the shared base (`shared/colors.json`, `shared/languages.json`) must be updated together with the code; core and interface files must stay separated (core = calculation/search, interface = DOM/Widget)