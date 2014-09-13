'use strict';

var cssCodepoints = require('../..')
  , equal = require('../equality');

var assert = require('assert')
  , fs = require('fs');


var predefinedOutput = fs.readFileSync(__dirname + '/output.css').toString();

var config = {
  fontFamily: 'MySuperFont',
  prefix: 'icon-',
  formats: {
    svg: 'my_super_font.svg',
    ttf: 'my_super_font.ttf'
  },
  icons: {
    foo: 0x1337,
    bar: '266e'
  }
};


module.exports = function () {
  assert(equal(cssCodepoints(config), predefinedOutput));
};