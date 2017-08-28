'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Catalog = require('./components/Catalog');

var _Catalog2 = _interopRequireDefault(_Catalog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (configuration, element) {
  _reactDom2.default.render(_react2.default.createElement(_Catalog2.default, configuration), element);
};