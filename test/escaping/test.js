'use strict';

var cssCodepoints = require('../..')
  , equal = require('../equality');

var assert = require('assert')
  , fs = require('fs');


var predefinedOutput = fs.readFileSync(__dirname + '/output.css').toString();

var config = {
  fontFamily: '<> Sans',
  prefix: '1 < 2 -',
  formats: {
    '<format>': 'path/to/font'
  },
  icons: {
    '>': 0x3e
  }
};


module.exports = function () {
  assert(equal(cssCodepoints(config), predefinedOutput));
};
