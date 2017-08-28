'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DOMUtils = require('./DOMUtils');

var _Btn = require('./Btn.css');

var _Btn2 = _interopRequireDefault(_Btn);

var _Effects = require('./effects/Effects.css');

var _Effects2 = _interopRequireDefault(_Effects);

var _Effects3 = require('./effects/Effects1.css');

var _Effects4 = _interopRequireDefault(_Effects3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable css-modules/no-undef-class, css-modules/no-unused-class */


var fxs = [_Effects4.default];

var noop = function noop() {
  return null;
};

var Btn = function (_React$PureComponent) {
  _inherits(Btn, _React$PureComponent);

  function Btn() {
    _classCallCheck(this, Btn);

    var _this = _possibleConstructorReturn(this, (Btn.__proto__ || Object.getPrototypeOf(Btn)).call(this));

    _this.handleRef = function (ref) {
      if (!ref) return;

      var effect = _this.props.effect;

      var width = ref.offsetWidth;
      var height = ref.offsetHeight;
      var ratio = width / height;

      var styles = '';
      /* Because we can't use react to set psuedo element css */
      if (effect === '1e') {
        styles = '\n        .' + fxs[0]['fx-1e'] + ':hover::after {\n          height: ' + ratio * 81.76 + '%;\n        }\n        .' + fxs[0]['fx-1e'] + ':active::after {\n          height: ' + ratio * 125.78 + '%;\n        }\n      ';
      } else if (effect === '1a') {
        styles += '\n        .' + fxs[0]['fx-1a'] + ' {\n          color: ' + _this.props.color + ';\n        }\n        .' + fxs[0]['fx-1a'] + ':hover {\n          background: ' + _this.props.hoverBg + ';\n        }\n        .' + fxs[0]['fx-1a'] + ':hover button {\n          color: ' + _this.props.hoverColor + ';\n        }\n      ';
      }
      styles += '\n        .' + _Effects2.default.fx + ' {\n          background: ' + _this.props.bg + ';\n          color: ' + _this.props.color + ';\n        }\n        .' + _Effects2.default.fx + '::after {\n          background: ' + _this.props.hoverBg + ';\n        }\n        .' + _Effects2.default.fx + ':hover button {\n          color: ' + _this.props.hoverColor + ';\n        }\n    ';
      _this.removeStyleSheet();
      _this.removeStyleSheet = (0, _DOMUtils.addStyleSheet)(styles);
    };

    _this.removeStyleSheet = noop;
    return _this;
  }

  _createClass(Btn, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeStyleSheet();
    }
  }, {
    key: 'render',
    value: function render() {
      var handleRef = this.handleRef;

      var _props = this.props,
          txt = _props.txt,
          children = _props.children,
          bg = _props.bg,
          effect = _props.effect,
          color = _props.color,
          hoverBg = _props.hoverBg,
          hoverColor = _props.hoverColor,
          props = _objectWithoutProperties(_props, ['txt', 'children', 'bg', 'effect', 'color', 'hoverBg', 'hoverColor']);

      var buttonClasses = [_Btn2.default.root];
      // e.g. effect = 1b should add cass effects and effects-1b
      if (effect.length > 0) {
        var fxNum = Number(effect[0]);
        if (!fxNum > 0) {
          throw Error(effect + ' is not a valid effect');
        }
        var fx = fxs[fxNum - 1];
        buttonClasses.push(_Effects2.default.fx);
        buttonClasses.push(fx['fx-' + effect]);
        buttonClasses.push(fx['fx-' + fxNum]);
        // this class is for overriding styles
        buttonClasses.push('creative-btn');
      }

      return _react2.default.createElement(
        'div',
        {
          className: buttonClasses.join(' '),
          ref: handleRef
        },
        _react2.default.createElement(
          'button',
          props,
          txt || children
        )
      );
    }
  }]);

  return Btn;
}(_react2.default.PureComponent);

Btn.defaultProps = {
  children: null,
  txt: '',
  effect: '',
  bg: 'blue',
  color: 'yellow',
  hoverBg: 'black',
  hoverColor: 'white'
};
Btn.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  txt: _propTypes2.default.string,
  effect: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  color: _propTypes2.default.string,
  hoverBg: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string
} : {};
exports.default = Btn;