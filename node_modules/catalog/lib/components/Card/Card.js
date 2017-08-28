'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('../../utils/warning');

var _warning2 = _interopRequireDefault(_warning);

var _Page = require('../Page/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  (0, _warning2.default)(false, 'The `Card` component is deprecated; use `Page` instead.');

  return _react2.default.createElement(_Page2.default, props);
};

exports.default = Card;