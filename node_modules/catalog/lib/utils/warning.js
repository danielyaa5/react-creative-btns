'use strict';

exports.__esModule = true;
var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  // Logs an error if condition is _not_ met.
  warning = function warning(condition, message) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var _console;

      (_console = console).error.apply(_console, ['Catalog warning: ' + message].concat(args)); // eslint-disable-line no-console
    }
  };
}

exports.default = warning;