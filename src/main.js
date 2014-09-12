'use strict';

var mustache = require('mustache')
  , extend = require('extend');

var fs = require('fs');


var source = fs.readFileSync(__dirname + '/template.css').toString();


/**
 * Spit out CSS based on the specified config.
 *
 * @arg {Object} config
 * @return {string}
 */
module.exports = function (config) {
  config = config || {};

  // Stringify code points.
  if (config.icons) {
    config = extend({}, config, {
      icons: config.icons.map(function (icon) {
        return {
          name: icon.name,
          codepoint: icon.codepoint.toString(0x10)
        };
      })
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
