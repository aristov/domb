# domb

[![NPM Version](https://img.shields.io/npm/v/domb.svg)](https://www.npmjs.com/package/domb)
[![Node.js CI](https://github.com/aristov/domb/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/domb/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/domb/badge.svg?branch=main)](https://coveralls.io/github/aristov/domb?branch=main)

DomB [domby] is a DOM Builder.

This is a simple cross-platform DOM generation library.
It is a handy tool for creating templates and testing.

## Features

- Convenient JS-compatible syntax
- Cross-platform, works both in NodeJS and in the browser
- Support for ES2015 named imports
- Small footprint, 1KB after gzip

## Installation

```shell
npm install domb
```

## Usage

ES2015

```js
import { div } from 'domb'
```

CommonJS

```js
const { div } = require('domb')
```

Browser

```html
<script src="https://unpkg.com/domb@latest/dist/domb.js"></script>
<script>
  const { div } = domb
</script>
```

## Example

DomB can be used both in NodeJS and in the browser:

```js
import { form, label, input, button } from 'domb'

const node = form({
  action : 'https://google.com/search',
  target : '_blank',
  children : [
    label([
      'Search ',
      input({ type : 'search', name : 'q' }),
    ]),
    button('Find'),
  ],
})

// browser
document.body.append(node)

// nodejs
app.get('/form', (req, res) => res.send(node.outerHTML))
```

The `node` variable is a DOM structure with the appropriate markup:

```html
<form action=//google.com/search target=_blank>
    <label>
        Search 
        <input type=search name=q>
    </label>
    <button>Find</button>
</form>
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/domb/master/LICENSE)
