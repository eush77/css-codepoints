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
  formats: [{
    url: 'my_super_font.svg',
    type: 'svg'
  }, {
    url: 'my_super_font.ttf',
    type: 'ttf'
  }],
  icons: [{
    name: 'foo',
    codepoint: 0x1337
  }, {
    name: 'bar',
    codepoint: 0x266e
  }]
});


assert(equalAsCss(output, predefinedOutput), 'Generated CSS differs from the predefined answer!');
util.log('Test passed.');
