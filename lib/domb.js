const { document } = require('xwindow')

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {HTMLElement}
 */
function domb(name, props = {}) {
  const node = name === '#fragment'?
    document.createDocumentFragment() :
    document.createElement(name)
  if(props.constructor !== Object) {
    props = { children : props }
  }
  node.append(...[props.children].flat(Infinity).filter(Boolean))
  if(name === '#fragment') {
    return node
  }
  let prop, value
  for(prop in props) {
    value = props[prop]
    if(prop !== 'children' && value !== undefined) {
      if(prop in node) {
        node[prop] = value
      }
      else node.setAttribute(prop, value)
    }
  }
  return node
}

module.exports = domb
