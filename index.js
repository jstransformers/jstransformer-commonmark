'use strict';

var commonmark = require('commonmark')
var reader = new commonmark.Parser()
var writers = {}

exports.name = 'commonmark'
exports.inputFormats = ['md', 'markdown', 'commonmark']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}
  var parsed = reader.parse(str)
  return function render (locals) {
    locals = locals || {}
    var writer = locals.writer || options.writer || 'HtmlRenderer'
    if (!writers[writer]) {
      writers[writer] = commonmark[writer](locals)
    }
    return writers[writer].render(parsed)
  }
}
