# NameToColor

Converte textos, IDs e formatos de cor em hexadecimal. O plugin combina uma base extensa de nomes de cores com fallback determinístico para qualquer entrada.

## 🔗 Página de teste interativa

[https://zonaro.github.io/NameToColor/](https://zonaro.github.io/NameToColor/)

Experimente todas as funções do plugin ao vivo — incluindo o navegador paginado da base de cores com `listColors`.

## Instalação via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/zonaro/NameToColor@main/NameToColor.js"></script>
```

Depois de incluir o script, as funções globais `generateColor()`, `generateReadableColor()` e `listColors()` ficam disponíveis no navegador.

## Funções

### `generateColor(input)`

Função principal. Aceita diversos tipos de entrada e retorna um código hexadecimal (`#rrggbb` ou `#rrggbbaa`).

### `generateReadableColor(input)`

Retorna um par `[textColor, backgroundColor]` onde a cor do texto é legível **e harmoniosa** sobre o fundo.

#### Algoritmo

1. Gera a cor base com `generateColor(input)`.
2. Calcula a taxa de contraste WCAG entre a cor de fundo e o branco (`#fff`) e o preto (`#000`).
3. Escolhe a cor de base (branco ou preto) com **maior contraste**.
4. **Mescla** (blend) essa cor de base com a cor original na proporção **70/30**, criando uma cor de texto legível porém visualmente coerente com a paleta.

```js
generateReadableColor("tomato");
// Ex.: ["#b24338", "#ff6347"]  (texto mesclado, não preto puro)

generateReadableColor("black");
// -> ["#4d4d4d", "#000000"]    (texto mesclado, não branco puro)
```

Aplicação prática em elemento HTML:

```js
const el = document.getElementById("username");
const [textColor, backgroundColor] = generateReadableColor(el.textContent);

el.style.color = textColor;
el.style.backgroundColor = backgroundColor;
```

### `listColors(pageNumber?, pageSize?)`

Retorna a base interna de cores de forma paginada.

```js
// Todas as cores em uma página
listColors();
// -> { items: [...], pageNumber: 1, pageCount: 1, totalItems: 1023 }

// Página 2 com 10 itens
listColors(2, 10);
// -> { items: [...], pageNumber: 2, pageCount: 103, totalItems: 1023 }
```

Útil para construir navegadores, seletores ou tabelas de cores. A página de teste interativa usa essa função para exibir a base completa com paginação.

## Tipos de entrada

### 1) Nome de cor conhecido (base interna)

Aceita nomes de uma lista extensa de cores (centenas de entradas):

```js
generateColor("Absolute Zero"); // -> "#0048BA"
generateColor("zaffre");        // -> "#0014A8"
```

Tambem tenta correspondencia aproximada (fuzzy):

```js
generateColor("absolut zero"); // -> "#0048BA" (nome semelhante)
```

### 2) ID numerico da tabela interna

Se a entrada for numero, o plugin tenta buscar pelo campo `ID`:

```js
generateColor(1);   // -> "#0048BA"
generateColor(974); // -> "#39A78E"
```

### 3) Valores em HEX

Se a entrada ja for HEX (com ou sem `#`), ela e retornada normalizada:

```js
generateColor("#ff00aa"); // -> "#ff00aa"
generateColor("ff00aa");  // -> "#ff00aa"
generateColor("f0a");     // -> "#f0a"
```

### 4) Valores RGB e RGBA

Converte strings RGB/RGBA para hexadecimal:

```js
generateColor("rgb(255, 99, 71)");       // -> "#ff6347"
generateColor("rgba(255, 99, 71, 0.5)"); // -> "#ff634780"
```

### 5) Palavra "random"

Retorna uma cor aleatoria a cada chamada:

```js
generateColor("random"); // -> "#a3f2c1" (exemplo)
```

### 6) Nomes CSS validos

Se o navegador reconhecer a string como cor CSS valida, o plugin retorna em formato hexadecimal:

```js
generateColor("tomato");
generateColor("rebeccapurple");
```

### 7) Texto generico (fallback deterministico)

Quando nada acima se aplica, a cor e gerada por hash simples da string:

```js
generateColor("Lucas"); // -> sempre a mesma cor para "Lucas"
generateColor("Maria"); // -> sempre a mesma cor para "Maria"
```

### 8) Entrada vazia

Entradas vazias, `null` ou `undefined` retornam `"black"`:

```js
generateColor("");
generateColor(null);
generateColor(undefined);
// -> "black"
```

### 9) Elementos HTML

Passando um elemento HTML, a função aplica a cor gerada (baseada no `textContent`) diretamente à propriedade `color` do elemento e retorna a cor:

```js
const el = document.getElementById("username");
generateColor(el);
// el.style.color agora está definido com a cor gerada
```

Ou como um seletor em loop:

```js
document.querySelectorAll(".tag").forEach(el => generateColor(el));
```

## Ordem de processamento

1. Elemento HTML
2. Numero (ID da tabela)
3. Entrada vazia
4. `"random"`
5. HEX
6. RGB
7. RGBA
8. Cor CSS valida
9. Busca aproximada em nomes internos
10. Hash deterministico

## Características

- **Determinístico** no fallback por texto — a mesma entrada sempre produz a mesma cor.
- **Base interna** com ~1000+ cores nomeadas, buscáveis por nome (com fuzzy match) ou por ID numérico.
- **Aceita múltiplos formatos**: HEX (`#rgb`, `#rrggbb`), RGB, RGBA, nomes CSS, `"random"` e elementos HTML.
- **Contraste inteligente**: `generateReadableColor` calcula a taxa de contraste WCAG e mescla a cor do texto com a cor original para um resultado legível e esteticamente harmonioso.
- **Paginação**: `listColors()` permite navegar pela base de cores com suporte a páginas.
- **Zero dependências**: funciona puramente no navegador com JavaScript vanilla.
- **Tamanho reduzido**: ~38 KB minificado, sem `npm install`.

## Licença

MIT
