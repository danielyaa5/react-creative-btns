'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHOW_AFTER_MS = 500;

var loaderKeyframes = _radium2.default.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' }
}, 'Loader');

var styles = {
  spinner: {
    borderColor: '#EEEEEE #D3D3D3 #B6B6B6 #999999',
    borderRadius: '50px',
    borderStyle: 'solid',
    borderWidth: '3px',
    height: '50px',
    margin: 'calc(50% - 25px) auto 0 auto',
    width: '50px',
    animation: loaderKeyframes + ' 2s linear infinite'
  },
  hidden: {
    display: 'none'
  }
};

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      visible: false
    };
    return _this;
  }

  Loader.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.interval = setTimeout(function () {
      return _this2.setState({ visible: true });
    }, SHOW_AFTER_MS);
  };

  Loader.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  };

  Loader.prototype.render = function render() {
    var loader = this.state.visible ? styles.spinner : styles.hidden;

    return _react2.default.createElement('div', { style: loader, className: 'cg-Page-Loader' });
  };

  return Loader;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Loader);