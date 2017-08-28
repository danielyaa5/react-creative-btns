"use strict";

exports.__esModule = true;

exports.default = function (namespace) {
  var counter = void 0;
  counter = 0;
  return function () {
    return namespace + "-" + counter++;
  };
};