# domb

[![NPM Version](https://img.shields.io/npm/v/domb.svg?maxAge=86400)](https://www.npmjs.com/package/domb)

DOM Builder.

This is a simple cross-platform DOM generation library.
It can be used for creating templates and testing.

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
