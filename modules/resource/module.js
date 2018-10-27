const path = require('path')

module.exports = function nuxtResourceModule(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    ssr: true,
    options: {
      libSrc: path.resolve(__dirname, 'lib'),
    },
  })
}
