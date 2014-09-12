'use strict';

var cssCodepoints = require('..');

var assert = require('assert')
  , util = require('util')
  , fs = require('fs');


var equalAsCss = function (a, b) {
  return a.replace(/\s/g, '') == b.replace(/\s/g, '');
};


var predefinedOutput = fs.readFileSync(__dirname + '/output.css').toString();

var output = cssCodepoints({
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
});


assert(equalAsCss(output, predefinedOutput), 'Generated CSS differs from the predefined answer!');
util.log('Test passed.');
