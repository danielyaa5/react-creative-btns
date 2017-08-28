import uuidv4 from 'uuid/v4';

/**
 * Add this because Modernizr test for translate3d doesnt seem to work
 * @see https://gist.github.com/lorenzopolidori/3794226
 * @returns {boolean}
 */
export function has3d() {
  const el = document.createElement('p');
  const transforms = {
    webkitTransform: '-webkit-transform',
    OTransform: '-o-transform',
    msTransform: '-ms-transform',
    MozTransform: '-moz-transform',
    transform: 'transform',
  };
  let result;

  // Add it to the body to get the computed style
  document.body.insertBefore(el, null);

  for (const t in transforms) {
    if (transforms.hasOwnProperty(t)) { // eslint-disable-line
      if (el.style[t] !== undefined) {
        el.style[t] = 'translate3d(1px,1px,1px)';
        result = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }
  }

  document.body.removeChild(el);

  return (result !== undefined && result.length > 0 && result !== 'none');
}

export function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  const node = document.head.querySelector(
    `${tagName}[${keyName}="${keyValue}"]`,
  );
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    const nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

export function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

export class EventManager {
  constructor() {
    this.events = [];
  }

  addEvent({ type, el, listener }) {
    this.events.push({ type, el, listener });
    return el.addEventListener(type, listener);
  }

  removeEvents() {
    this.events.forEach(EventManager.removeEvent);
  }

  static removeEvent({ type, el, listener }) {
    return el.addEventListener(type, listener);
  }
}

export function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

export function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

export function removeStyleSheet(id) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.parentNode.removeChild(elem);
  }
}

export function addStyleSheet(css) {
  const elem = document.createElement('style');
  elem.setAttribute('type', 'text/css');
  elem.id = uuidv4();
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
export function closest(elem, selector, stopSelector) {
  let curr = elem;
  let closestEl = null;
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
