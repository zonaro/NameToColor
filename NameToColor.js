/**
 * Gera uma cor hexadecimal a partir de uma string ou número.
 * @param {string|number} input - A entrada para gerar a cor.
 * @returns {string} - O código hexadecimal da cor.
 */
function generateColor(input) {

    const text = String(input || '').trim().toLowerCase(); // Garante que text seja uma string, mesmo que input seja undefined ou null

    if (text === '') {
        return 'transparent'; // Retorna transparente para entradas vazias
    }

    // 1. Regra: Palavra "random"
    if (text === 'random') {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // 2. Regra: Nomes de cores (CSS Valid colors)
    // Criamos um elemento temporário para verificar se o navegador reconhece o nome
    const s = new Option().style;
    s.color = text;
    if (s.color !== '') {
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.fillStyle = text;
        return ctx.fillStyle; // Retorna o formato #rrggbb
    }

    // 3. Regra: Números ou Palavras Aleatórias (Determinístico)
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        // Algoritmo de hash simples (djb2)
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
        // Extrai um byte do hash para cada canal (R, G, B)
        const value = (hash >> (i * 8)) & 0xFF;
        color += value.toString(16).padStart(2, '0');
    }

    return color;
}



 