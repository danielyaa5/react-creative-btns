'use strict';

exports.__esModule = true;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Sequentially runs scripts as they are added
//


var current = null;
var queue = [];
var dequeue = function dequeue(handler) {
  current = handler();
  current.then(function () {
    current = null;
    if (queue.length > 0) {
      return dequeue(queue.shift());
    }
    return void 0;
  });
  return current.catch(function () {
    throw new Error('Error loading script');
  });
};
var enqueue = function enqueue(handler) {
  if (current !== null) {
    return queue.push(handler);
  }
  return dequeue(handler);
};
var execScript = function execScript(decorate) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  decorate(script);
  var head = document.getElementsByTagName('head')[0] || document.documentElement;
  return head.appendChild(script);
};
var execRemote = function execRemote(src) {
  return function () {
    return new Promise(function (resolve, reject) {
      return execScript(function (script) {
        script.addEventListener('load', resolve, false);
        script.addEventListener('error', reject, false);
        return script.setAttribute('src', src);
      });
    });
  };
};
var execInline = function execInline(src) {
  return function () {
    return new Promise(function (resolve) {
      return execScript(function (script) {
        script.appendChild(document.createTextNode(src));
        return resolve();
      });
    });
  };
};

exports.default = function (srcOrEl) {
  if (_ramda2.default.is(String, srcOrEl) && !_ramda2.default.isEmpty(srcOrEl.trim())) {
    enqueue(execRemote(srcOrEl));
  }
  if (srcOrEl.textContent && !_ramda2.default.isEmpty(srcOrEl.textContent.trim())) {
    return enqueue(execInline(srcOrEl.textContent));
  }
  return void 0;
};