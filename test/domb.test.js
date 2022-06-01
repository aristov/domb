const { Node, XMLSerializer } = require('xwindow')
const test = require('ava')
const domb = require('../lib')

const { form, label, input, button } = domb
const { html, head, body, base, meta, title, link, style, script } = domb
const { table, caption, thead, tbody, tr, th, td } = domb
const { fragment, text, div } = domb

const serializer = new XMLSerializer

test('domb', t => {
  const node = domb('div', {
    id : 'foo',
    tabIndex : 0,
    children : domb('span', {
      className : 'bar',
      textContent : 'Hello DomB!',
    }),
  })
  t.is(node.outerHTML, '<div id="foo" tabindex="0"><span class="bar">Hello DomB!</span></div>')
})

test('form', t => {
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
  t.is(node.outerHTML,
    '<form action="https://google.com/search" target="_blank"><label>Search <input type="search" name="q"></label><button>Find</button></form>')
})

test('html', t => {
  const node = html({
    lang : 'en',
    children : [
      head([
        meta({ charset : 'UTF-8' }),
        title('DomB example'),
        base({ href : 'https://example.com/' }),
        link({ rel : 'stylesheet', href : 'index.css' }),
        style('body{color:#AAA;}'),
      ]),
      body([
        script({ src : 'index.js' }),
      ]),
    ],
  })
  t.is(node.outerHTML,
    '<html lang="en"><head><meta charset="UTF-8"><title>DomB example</title><base href="https://example.com/"><link rel="stylesheet" href="index.css"><style>body{color:#AAA;}</style></head><body><script src="index.js"></script></body></html>')
})

test('table', t => {
  const node = table([
    caption('Capitals'),
    thead(tr([th('Country'), th('Capital')])),
    tbody([
      tr([td('USA'), td('Washington')]),
      tr([td('UK'), td('London')]),
      tr([td('Netherlands'), td('Amsterdam')]),
    ])
  ])
  t.is(node.outerHTML,
    '<table><caption>Capitals</caption><thead><tr><th>Country</th><th>Capital</th></tr></thead><tbody><tr><td>USA</td><td>Washington</td></tr><tr><td>UK</td><td>London</td></tr><tr><td>Netherlands</td><td>Amsterdam</td></tr></tbody></table>')
})

test('text', t => {
  const node = text('Hello DomB!')
  t.is(node.nodeType, Node.TEXT_NODE)
  t.is(node.data, 'Hello DomB!')
  t.is(serializer.serializeToString(node), 'Hello DomB!')
})

test('fragment', t => {
  const node = fragment([input({ type : 'checkbox' }), button('Submit')])
  t.is(node.nodeType, Node.DOCUMENT_FRAGMENT_NODE)
  t.is(node.children.length, 2)
  const container = div(node)
  t.false(node.hasChildNodes())
  t.is(container.innerHTML, '<input type="checkbox"><button>Submit</button>')
})
