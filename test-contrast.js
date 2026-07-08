/**
 * Teste de contraste WCAG para generateReadableColor
 * Verifica se todas as cores testadas atingem WCAG AA (4.5:1)
 */

const fs = require('fs');

// ──────────── Core algorithm (extracted from NameToColor.js) ────────────

function toLinear(ch) {
    const s = ch / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function relativeLuminance(r, g, b) {
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function calcContrast(fg, bg) {
    const l1 = relativeLuminance(fg.r, fg.g, fg.b);
    const l2 = relativeLuminance(bg.r, bg.g, bg.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

function blendColors(color1, color2, ratio) {
    const r = Math.round(parseInt(color1.slice(1, 3), 16) * ratio + parseInt(color2.slice(1, 3), 16) * (1 - ratio));
    const g = Math.round(parseInt(color1.slice(3, 5), 16) * ratio + parseInt(color2.slice(3, 5), 16) * (1 - ratio));
    const b = Math.round(parseInt(color1.slice(5, 7), 16) * ratio + parseInt(color2.slice(5, 7), 16) * (1 - ratio));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

/**
 * Replica o novo algoritmo de generateReadableColor (busca binária)
 */
function computeReadableColor(hex) {
    const bg = { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };
    const bgL = relativeLuminance(bg.r, bg.g, bg.b);
    const TARGET = 4.5;

    const cWhite = (1.0 + 0.05) / (bgL + 0.05);
    const cBlack = (bgL + 0.05) / (0.0 + 0.05);
    const useWhite = cWhite >= cBlack;
    const baseHex = useWhite ? '#FFFFFF' : '#000000';

    // Binary search for optimal ratio
    const MIN_RATIO = 0.5;
    let testColor = blendColors(baseHex, hex, MIN_RATIO);
    let testRgb = { r: parseInt(testColor.slice(1, 3), 16), g: parseInt(testColor.slice(3, 5), 16), b: parseInt(testColor.slice(5, 7), 16) };
    let testContrast = calcContrast(testRgb, bg);

    let ratio;
    if (testContrast >= TARGET) {
        ratio = MIN_RATIO;
    } else {
        let low = MIN_RATIO;
        let high = 1.0;
        for (let i = 0; i < 20; i++) {
            const mid = (low + high) / 2;
            const midColor = blendColors(baseHex, hex, mid);
            const midRgb = { r: parseInt(midColor.slice(1, 3), 16), g: parseInt(midColor.slice(3, 5), 16), b: parseInt(midColor.slice(5, 7), 16) };
            const midContrast = calcContrast(midRgb, bg);
            if (midContrast >= TARGET) {
                high = mid;
            } else {
                low = mid;
            }
        }
        ratio = high;
    }
    const textColor = blendColors(baseHex, hex, ratio);

    const fc = { r: parseInt(textColor.slice(1, 3), 16), g: parseInt(textColor.slice(3, 5), 16), b: parseInt(textColor.slice(5, 7), 16) };
    const contrast = calcContrast(fc, bg);

    return { textColor, bgColor: hex, ratio, contrast, pass: contrast >= TARGET };
}

// ──────────── Test suite ────────────

const testColors = [
    // Cores problemáticas (luminância média)
    '#85d8fd', '#808080', '#7CB9E8', '#A0A0A0',
    // Extremos
    '#000000', '#FFFFFF',
    // Primárias
    '#FF0000', '#00FF00', '#0000FF',
    // Diversas
    '#FFD700', '#8B008B', '#F5F5DC', '#2F4F4F',
    '#c8e308', '#FF69B4', '#4B0082', '#A0522D',
    '#E0E0E0', '#1A1A2E', '#E8D5B7', '#0D7377',
    '#FF6347', '#00CED1', '#DAA520', '#6A5ACD',
    '#F0FFF0', '#FFE4E1', '#8B4513', '#2E8B57',
    '#B0BF1A', '#C46210', '#7FFFD4', '#B22222',
    '#F0E68C', '#ADFF2F', '#DC143C', '#00FA9A',
    '#191970', '#FF8C00', '#9932CC', '#8FBC8F',
    // Luminância muito baixa
    '#050505', '#0A0A0A', '#111111',
    // Luminância muito alta
    '#F8F8F8', '#F0F0F0', '#FAFAFA',
];

console.log('\n');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║     Teste de Contraste WCAG — generateReadableColor        ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');
console.log('Alvo: WCAG AA (≥ 4.5:1)');
console.log('');
console.log(' Fundo       | Texto       | Blend  | Contraste | Status');
console.log('─'.repeat(60));

let passCount = 0;
let failCount = 0;

testColors.forEach(hex => {
    const r = computeReadableColor(hex);
    if (r.pass) passCount++; else failCount++;
    const icon = r.pass ? '✅' : '❌';
    console.log(` ${r.bgColor.padEnd(11)}| ${r.textColor.padEnd(11)}| ${r.ratio.toFixed(3).padEnd(6)}| ${r.contrast.toFixed(2)}:1${' '.repeat(4)}| ${icon} ${r.pass ? 'AA' : 'FALHOU'}`);
});

console.log('─'.repeat(60));
console.log(`\nResultado: ${passCount} aprovados, ${failCount} falhas de ${testColors.length} cores`);
console.log(failCount === 0 ? '\n🎉 TODAS AS CORES PASSARAM WCAG AA (4.5:1)!' : '\n⚠️  ATENÇÃO: Algumas cores falharam!');

// ──────────── Also test old algorithm for comparison ────────────

console.log('\n');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║     Comparação: Algoritmo Antigo (70/30) vs Novo           ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

const oldTests = ['#85d8fd', '#808080', '#7CB9E8', '#A0A0A0', '#8B008B', '#c8e308', '#E0E0E0'];

oldTests.forEach(hex => {
    const bg = { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };
    const bgL = relativeLuminance(bg.r, bg.g, bg.b);
    const cWhite = (1.0 + 0.05) / (bgL + 0.05);
    const cBlack = (bgL + 0.05) / (0.0 + 0.05);
    const useWhiteOld = cWhite > cBlack;
    const baseHexOld = useWhiteOld ? '#FFFFFF' : '#000000';
    const textOld = blendColors(baseHexOld, hex, 0.7);
    const fcOld = { r: parseInt(textOld.slice(1, 3), 16), g: parseInt(textOld.slice(3, 5), 16), b: parseInt(textOld.slice(5, 7), 16) };
    const contrastOld = calcContrast(fcOld, bg);

    const r = computeReadableColor(hex);

    console.log(` Cor: ${hex}`);
    console.log(`   Antigo (70/30): ${textOld} — ${contrastOld.toFixed(2)}:1 ${contrastOld >= 4.5 ? '✅' : '❌'}`);
    console.log(`   Novo (dinâmico): ${r.textColor} — ${r.contrast.toFixed(2)}:1 ✅ (blend ${(r.ratio * 100).toFixed(0)}%)`);
    console.log('');
});
