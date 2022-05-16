const { NODE_ENV } = process.env
const JS_EXT = NODE_ENV === 'production' ? '.min.js' : '.js'

module.exports = {
  mode : NODE_ENV || 'none',
  entry : './lib/index.js',
  output : {
    filename : 'domb' + JS_EXT,
    library : {
      name : 'domb',
      type : 'umd',
    },
    globalObject : 'this',
  },
}
