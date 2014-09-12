'use strict';

var mustache = require('mustache')
  , extend = require('extend')
  , pairs = require('lodash.pairs')
  , zipObject = require('lodash.zipobject');

var fs = require('fs');


var source = fs.readFileSync(__dirname + '/template.css').toString();


/**
 * Spit out CSS based on the specified config.
 *
 * @arg {Object} config
 * @return {string}
 */
module.exports = function (config) {
  // Make a working copy to avoid committing accidental changes.
  config = extend({}, config || {});

  // Stringify code points: no-op for strings, base conversion for numbers.
  // Rewrite in array-of-objects notation.
  if (config.icons) {
    config.icons = pairs(config.icons).map(function (icon) {
      return {
        name: icon[0],
        codepoint: icon[1].toString(0x10)
      };
    });
  }

  // Rewrite in array-of-objects notation.
  if (config.formats) {
    config.formats = pairs(config.formats).map(function (format) {
      return zipObject(['type', 'url'], format);
    });
  }

  return mustache.render(source, extend({
    // Remove extra comma.
    _commaSeparated: function () {
      return function (text, render) {
        return render(text).trim().slice(0, -1);
      };
    }
  }, config));
};
