const test = require('ava')
const h = require('../lib')
const { input, form } = h

test('h', t => {
  const node = h('div', {
    className : 'foo',
    children : 'bar',
  })
  t.is(node.outerHTML, '<div class="foo">bar</div>')
})

test('input', t => {
  const node = input({
    defaultValue : 'Hello world!',
    required : true,
  })
  t.is(node.outerHTML, '<input value="Hello world!" required="">')
})

test('form', t => {
  const node = form({
    method : 'post',
    action : '/signin',
    children : [
      input({ placeholder : 'Name' }),
      input({ type : 'password', placeholder : 'Password' }),
      input({ type : 'submit', value : 'Go!' }),
    ],
  })
  t.is(node.outerHTML, '<form method="post" action="/signin"><input placeholder="Name"><input type="password" placeholder="Password"><input type="submit" value="Go!"></form>')
})
