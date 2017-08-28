'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    _Page2.default,
    null,
    'Sorry, no page exists at **' + location.pathname + '**.'
  );
};

NotFound.propTypes = {
  location: _react.PropTypes.object.isRequired
};

exports.default = NotFound;