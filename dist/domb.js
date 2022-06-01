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

/**
 * @module domb
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = __webpack_require__(1)


/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

const { Text } = __webpack_require__(2)
const domb = __webpack_require__(3)

exports = module.exports = domb

exports.a = p => domb('a', p)
exports.abbr = p => domb('abbr', p)
exports.address = p => domb('address', p)
exports.area = p => domb('area', p)
exports.article = p => domb('article', p)
exports.aside = p => domb('aside', p)
exports.audio = p => domb('audio', p)
exports.b = p => domb('b', p)
exports.base = p => domb('base', p)
exports.bdi = p => domb('bdi', p)
exports.bdo = p => domb('bdo', p)
exports.blockquote = p => domb('blockquote', p)
exports.body = p => domb('body', p)
exports.br = p => domb('br', p)
exports.button = p => domb('button', p)
exports.canvas = p => domb('canvas', p)
exports.caption = p => domb('caption', p)
exports.cite = p => domb('cite', p)
exports.code = p => domb('code', p)
exports.col = p => domb('col', p)
exports.colgroup = p => domb('colgroup', p)
exports.data = p => domb('data', p)
exports.datalist = p => domb('datalist', p)
exports.dd = p => domb('dd', p)
exports.del = p => domb('del', p)
exports.details = p => domb('details', p)
exports.dfn = p => domb('dfn', p)
exports.dialog = p => domb('dialog', p)
exports.div = p => domb('div', p)
exports.dl = p => domb('dl', p)
exports.dt = p => domb('dt', p)
exports.em = p => domb('em', p)
exports.embed = p => domb('embed', p)
exports.fieldset = p => domb('fieldset', p)
exports.figcaption = p => domb('figcaption', p)
exports.figure = p => domb('figure', p)
exports.footer = p => domb('footer', p)
exports.form = p => domb('form', p)
exports.h1 = p => domb('h1', p)
exports.h2 = p => domb('h2', p)
exports.h3 = p => domb('h3', p)
exports.h4 = p => domb('h4', p)
exports.h5 = p => domb('h5', p)
exports.h6 = p => domb('h6', p)
exports.head = p => domb('head', p)
exports.header = p => domb('header', p)
exports.hgroup = p => domb('hgroup', p)
exports.hr = p => domb('hr', p)
exports.html = p => domb('html', p)
exports.i = p => domb('i', p)
exports.iframe = p => domb('iframe', p)
exports.img = p => domb('img', p)
exports.input = p => domb('input', p)
exports.ins = p => domb('ins', p)
exports.kbd = p => domb('kbd', p)
exports.label = p => domb('label', p)
exports.legend = p => domb('legend', p)
exports.li = p => domb('li', p)
exports.link = p => domb('link', p)
exports.main = p => domb('main', p)
exports.map = p => domb('map', p)
exports.mark = p => domb('mark', p)
exports.menu = p => domb('menu', p)
exports.meta = p => domb('meta', p)
exports.meter = p => domb('meter', p)
exports.nav = p => domb('nav', p)
exports.noscript = p => domb('noscript', p)
exports.object = p => domb('object', p)
exports.ol = p => domb('ol', p)
exports.optgroup = p => domb('optgroup', p)
exports.option = p => domb('option', p)
exports.output = p => domb('output', p)
exports.p = p => domb('p', p)
exports.picture = p => domb('picture', p)
exports.pre = p => domb('pre', p)
exports.progress = p => domb('progress', p)
exports.q = p => domb('q', p)
exports.rp = p => domb('rp', p)
exports.rt = p => domb('rt', p)
exports.ruby = p => domb('ruby', p)
exports.s = p => domb('s', p)
exports.samp = p => domb('samp', p)
exports.script = p => domb('script', p)
exports.section = p => domb('section', p)
exports.select = p => domb('select', p)
exports.slot = p => domb('slot', p)
exports.small = p => domb('small', p)
exports.source = p => domb('source', p)
exports.span = p => domb('span', p)
exports.strong = p => domb('strong', p)
exports.style = p => domb('style', p)
exports.sub = p => domb('sub', p)
exports.summary = p => domb('summary', p)
exports.sup = p => domb('sup', p)
exports.table = p => domb('table', p)
exports.tbody = p => domb('tbody', p)
exports.td = p => domb('td', p)
exports.template = p => domb('template', p)
exports.textarea = p => domb('textarea', p)
exports.tfoot = p => domb('tfoot', p)
exports.th = p => domb('th', p)
exports.thead = p => domb('thead', p)
exports.time = p => domb('time', p)
exports.title = p => domb('title', p)
exports.tr = p => domb('tr', p)
exports.track = p => domb('track', p)
exports.u = p => domb('u', p)
exports.ul = p => domb('ul', p)
exports["var"] = p => domb('var', p)
exports.video = p => domb('video', p)
exports.wbr = p => domb('wbr', p)

exports.fragment = p => domb('#fragment', p)
exports.text = d => new Text(d)


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

const { document } = __webpack_require__(2)

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