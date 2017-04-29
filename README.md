# jstransformer-commonmark

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-commonmark.svg)](https://greenkeeper.io/)

[CommonMark](https://github.com/jgm/commonmark.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-commonmark/master.svg)](https://travis-ci.org/jstransformers/jstransformer-commonmark)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-commonmark/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-commonmark)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-commonmark/master.svg)](http://david-dm.org/jstransformers/jstransformer-commonmark)
[![NPM version](https://img.shields.io/npm/v/jstransformer-commonmark.svg)](https://www.npmjs.org/package/jstransformer-commonmark)

## Installation

    npm install jstransformer-commonmark

## API

```js
<<<<<<< HEAD
var commonmark = require('jstransformer')(require('jstransformer-commonmark'))
=======
var commonmark = require('jstransformer')(require('jstransformer-commonmark'));
>>>>>>> c3f5dea729824052d0e5c585d768cedeed935de5

commonmark.render('Hello, *world*!').body
//=> '<p>Hello, <em>world</em>!</p>'
```

## License

MIT
