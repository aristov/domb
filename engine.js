/**
 * @param {string} filePath
 * @param {{}} params
 * @param {function} callback
 */
module.exports = (filePath, params, callback) => {
  try {
    const template = require(filePath)
    const node = template(params)
    const html = node.tagName === 'HTML' ? '<!doctype html>' + node.outerHTML : node.outerHTML
    callback(null, html)
    params.cache || delete require.cache[filePath]
  }
  catch(err) {
    callback(err)
    console.error(err)
  }
}
