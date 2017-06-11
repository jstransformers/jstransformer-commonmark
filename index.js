'use strict'

const commonmark = require('commonmark')

const reader = new commonmark.Parser()
const writers = {}

exports.name = 'commonmark'
exports.inputFormats = ['md', 'markdown', 'commonmark']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}
  const parsed = reader.parse(str)
  return locals => {
    locals = locals || {}
    const writer = locals.writer || options.writer || 'HtmlRenderer'
    if (!writers[writer]) {
      writers[writer] = new commonmark[writer]()
    }
    return writers[writer].render(parsed)
  }
}
