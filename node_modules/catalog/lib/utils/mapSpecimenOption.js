"use strict";

exports.__esModule = true;
var mapSpecimenOption = function mapSpecimenOption(test, map) {
  return function (option) {
    var match = test.exec(option);
    if (match) {
      var value = match[1];

      return map(value);
    }
    return null;
  };
};

exports.default = mapSpecimenOption;