# NameToColor

Converte textos, IDs e formatos de cor em hexadecimal. O plugin combina uma base extensa de nomes de cores com fallback determinístico para qualquer entrada.

## Instalação via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/zonaro/NameToColor@main/NameToColor.js"></script>
```

Depois de incluir o script, as funcoes globais generateColor(...) e generateReadableColor(...) ficam disponiveis no navegador.

## Uso

### generateReadableColor(input)

Retorna um par de cores no formato:

```js
[textColor, backgroundColor]
```

- textColor: `#ffffff` ou `#000000`, escolhida automaticamente com base em contraste.
- backgroundColor: cor gerada pela generateColor(input).

Exemplos:

```js
generateReadableColor("tomato");
// -> ["#000000", "#ff6347"]

generateReadableColor("black");
// -> ["#ffffff", "#000000"]

generateReadableColor("Lucas");
// -> ["#ffffff" ou "#000000", "#xxxxxx"]
```

Aplicacao pratica em elemento HTML:

```js
const el = document.getElementById("username");
const [textColor, backgroundColor] = generateReadableColor(el.textContent);

el.style.color = textColor;
el.style.backgroundColor = backgroundColor;
```

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

## Caracteristicas

- Deterministico no fallback por texto.
- Suporte a tabela interna de cores por nome e por ID.
- Aceita HEX, RGB e RGBA como entrada.
- Possui helper para contraste automatico com generateReadableColor.
- Sem dependencias externas.
- Funciona no browser (usa `document`, `Option` e `canvas`).

## Licença

MIT
