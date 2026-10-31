/**
 * NameToColor JS submodule — DOM functions (separate file).
 */
function applyToElement(element, fn) {
    if (!element) return;
    const text = element.textContent || element.innerText || '';
    const result = fn(text);
    if (Array.isArray(result)) {
        result.forEach((r, i) => {
            if (element.children[i]) element.children[i].textContent = r;
        });
    } else {
        element.textContent = result;
    }
}

function applyReadableColorToElement(element) {
    applyToElement(element, (t) => {
        const core = require('./name_to_color');
        return core.generateReadableColor(t);
    });
}

function applyGenerateColorToElement(element) {
    applyToElement(element, (t) => {
        const core = require('./name_to_color');
        return core.generateColor(t);
    });
}

module.exports = { applyToElement, applyReadableColorToElement, applyGenerateColorToElement };
