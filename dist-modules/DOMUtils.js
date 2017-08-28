'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.has3d = has3d;
exports.updateTag = updateTag;
exports.updateMeta = updateMeta;
exports.updateCustomMeta = updateCustomMeta;
exports.updateLink = updateLink;
exports.removeStyleSheet = removeStyleSheet;
exports.addStyleSheet = addStyleSheet;
exports.closest = closest;

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Add this because Modernizr test for translate3d doesnt seem to work
 * @see https://gist.github.com/lorenzopolidori/3794226
 * @returns {boolean}
 */
function has3d() {
  var el = document.createElement('p');
  var transforms = {
    webkitTransform: '-webkit-transform',
    OTransform: '-o-transform',
    msTransform: '-ms-transform',
    MozTransform: '-moz-transform',
    transform: 'transform'
  };
  var result = void 0;

  // Add it to the body to get the computed style
  document.body.insertBefore(el, null);

  for (var t in transforms) {
    if (transforms.hasOwnProperty(t)) {
      // eslint-disable-line
      if (el.style[t] !== undefined) {
        el.style[t] = 'translate3d(1px,1px,1px)';
        result = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }
  }

  document.body.removeChild(el);

  return result !== undefined && result.length > 0 && result !== 'none';
}

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

var EventManager = exports.EventManager = function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this.events = [];
  }

  _createClass(EventManager, [{
    key: 'addEvent',
    value: function addEvent(_ref) {
      var type = _ref.type,
          el = _ref.el,
          listener = _ref.listener;

      this.events.push({ type: type, el: el, listener: listener });
      return el.addEventListener(type, listener);
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      this.events.forEach(EventManager.removeEvent);
    }
  }], [{
    key: 'removeEvent',
    value: function removeEvent(_ref2) {
      var type = _ref2.type,
          el = _ref2.el,
          listener = _ref2.listener;

      return el.addEventListener(type, listener);
    }
  }]);

  return EventManager;
}();

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

function removeStyleSheet(id) {
  var elem = document.getElementById(id);
  if (elem) {
    elem.parentNode.removeChild(elem);
  }
}

function addStyleSheet(css) {
  var elem = document.createElement('style');
  elem.setAttribute('type', 'text/css');
  elem.id = (0, _v2.default)();
  if ('textContent' in elem) {
    elem.textContent = css;
  } else {
    elem.styleSheet.cssText = css;
  }
  document.head.appendChild(elem);
  return removeStyleSheet.bind(null, elem.id);
}

/**
 * Find the closest ancestor of a dom node that matches selector
 * @see https://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector
 * @param {Node} elem
 * @param {string} selector
 * @param {string} [stopSelector]
 * @returns {Node | null}
 */
function closest(elem, selector, stopSelector) {
  var curr = elem;
  var closestEl = null;
  while (curr) {
    if (curr.matches(selector)) {
      closestEl = curr;
      break;
    } else if (stopSelector && elem.matches(stopSelector)) {
      break;
    }
    curr = curr.parentElement;
  }
  return closestEl;
}