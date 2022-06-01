(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["domb"] = factory();
	else
		root["domb"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1)


/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

const { Text } = __webpack_require__(2)
const $ = __webpack_require__(3)

exports = module.exports = $

exports.a = p => $('a', p)
exports.abbr = p => $('abbr', p)
exports.address = p => $('address', p)
exports.area = p => $('area', p)
exports.article = p => $('article', p)
exports.aside = p => $('aside', p)
exports.audio = p => $('audio', p)
exports.b = p => $('b', p)
exports.base = p => $('base', p)
exports.bdi = p => $('bdi', p)
exports.bdo = p => $('bdo', p)
exports.blockquote = p => $('blockquote', p)
exports.body = p => $('body', p)
exports.br = p => $('br', p)
exports.button = p => $('button', p)
exports.canvas = p => $('canvas', p)
exports.caption = p => $('caption', p)
exports.cite = p => $('cite', p)
exports.code = p => $('code', p)
exports.col = p => $('col', p)
exports.colgroup = p => $('colgroup', p)
exports.data = p => $('data', p)
exports.datalist = p => $('datalist', p)
exports.dd = p => $('dd', p)
exports.del = p => $('del', p)
exports.details = p => $('details', p)
exports.dfn = p => $('dfn', p)
exports.dialog = p => $('dialog', p)
exports.div = p => $('div', p)
exports.dl = p => $('dl', p)
exports.dt = p => $('dt', p)
exports.em = p => $('em', p)
exports.embed = p => $('embed', p)
exports.fieldset = p => $('fieldset', p)
exports.figcaption = p => $('figcaption', p)
exports.figure = p => $('figure', p)
exports.footer = p => $('footer', p)
exports.form = p => $('form', p)
exports.h1 = p => $('h1', p)
exports.h2 = p => $('h2', p)
exports.h3 = p => $('h3', p)
exports.h4 = p => $('h4', p)
exports.h5 = p => $('h5', p)
exports.h6 = p => $('h6', p)
exports.head = p => $('head', p)
exports.header = p => $('header', p)
exports.hgroup = p => $('hgroup', p)
exports.hr = p => $('hr', p)
exports.html = p => $('html', p)
exports.i = p => $('i', p)
exports.iframe = p => $('iframe', p)
exports.img = p => $('img', p)
exports.input = p => $('input', p)
exports.ins = p => $('ins', p)
exports.kbd = p => $('kbd', p)
exports.label = p => $('label', p)
exports.legend = p => $('legend', p)
exports.li = p => $('li', p)
exports.link = p => $('link', p)
exports.main = p => $('main', p)
exports.map = p => $('map', p)
exports.mark = p => $('mark', p)
exports.menu = p => $('menu', p)
exports.meta = p => $('meta', p)
exports.meter = p => $('meter', p)
exports.nav = p => $('nav', p)
exports.noscript = p => $('noscript', p)
exports.object = p => $('object', p)
exports.ol = p => $('ol', p)
exports.optgroup = p => $('optgroup', p)
exports.option = p => $('option', p)
exports.output = p => $('output', p)
exports.p = p => $('p', p)
exports.picture = p => $('picture', p)
exports.pre = p => $('pre', p)
exports.progress = p => $('progress', p)
exports.q = p => $('q', p)
exports.rp = p => $('rp', p)
exports.rt = p => $('rt', p)
exports.ruby = p => $('ruby', p)
exports.s = p => $('s', p)
exports.samp = p => $('samp', p)
exports.script = p => $('script', p)
exports.section = p => $('section', p)
exports.select = p => $('select', p)
exports.slot = p => $('slot', p)
exports.small = p => $('small', p)
exports.source = p => $('source', p)
exports.span = p => $('span', p)
exports.strong = p => $('strong', p)
exports.style = p => $('style', p)
exports.sub = p => $('sub', p)
exports.summary = p => $('summary', p)
exports.sup = p => $('sup', p)
exports.table = p => $('table', p)
exports.tbody = p => $('tbody', p)
exports.td = p => $('td', p)
exports.template = p => $('template', p)
exports.textarea = p => $('textarea', p)
exports.tfoot = p => $('tfoot', p)
exports.th = p => $('th', p)
exports.thead = p => $('thead', p)
exports.time = p => $('time', p)
exports.title = p => $('title', p)
exports.tr = p => $('tr', p)
exports.track = p => $('track', p)
exports.u = p => $('u', p)
exports.ul = p => $('ul', p)
exports["var"] = p => $('var', p)
exports.video = p => $('video', p)
exports.wbr = p => $('wbr', p)

exports.fragment = c => $('#fragment', c)
exports.text = s => new Text(s)


/***/ }),
/* 2 */
/***/ ((module) => {

/**
 * @module xwindow
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
if(typeof window === 'undefined') {
  // Calling via eval() does not allow the module bundler to extract jsdom
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { DocumentFragment, document } = __webpack_require__(2)

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {HTMLElement}
 */
function domb(name, props = {}) {
  const node = name === '#fragment'? new DocumentFragment : document.createElement(name)
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


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});