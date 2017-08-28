/* eslint-disable css-modules/no-undef-class, css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';

import { addStyleSheet } from './DOMUtils';
import s from './Btn.css';
import base from './effects/Effects.css';
import fx1 from './effects/Effects1.css';

const fxs = [fx1];

const noop = () => null;

class Btn extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    txt: PropTypes.string,
    effect: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    hoverBg: PropTypes.string,
    hoverColor: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    txt: '',
    effect: '',
    bg: 'blue',
    color: 'yellow',
    hoverBg: 'black',
    hoverColor: 'white',
  };

  constructor() {
    super();
    this.removeStyleSheet = noop;
  }

  componentWillUnmount() {
    this.removeStyleSheet();
  }

  handleRef = (ref) => {
    if (!ref) return;

    const { effect } = this.props;
    const width = ref.offsetWidth;
    const height = ref.offsetHeight;
    const ratio = width / height;

    let styles = '';
    /* Because we can't use react to set psuedo element css */
    if (effect === '1e') {
      styles = `
        .${fxs[0]['fx-1e']}:hover::after {
          height: ${ratio * 81.76}%;
        }
        .${fxs[0]['fx-1e']}:active::after {
          height: ${ratio * 125.78}%;
        }
      `;
    } else if (effect === '1a') {
      styles += `
        .${fxs[0]['fx-1a']} {
          color: ${this.props.color};
        }
        .${fxs[0]['fx-1a']}:hover {
          background: ${this.props.hoverBg};
        }
        .${fxs[0]['fx-1a']}:hover button {
          color: ${this.props.hoverColor};
        }
      `;
    }
    styles += `
        .${base.fx} {
          background: ${this.props.bg};
          color: ${this.props.color};
        }
        .${base.fx}::after {
          background: ${this.props.hoverBg};
        }
        .${base.fx}:hover button {
          color: ${this.props.hoverColor};
        }
    `;
    this.removeStyleSheet();
    this.removeStyleSheet = addStyleSheet(styles);
  };

  render() {
    const { handleRef } = this;
    const { txt, children, bg, effect, color, hoverBg, hoverColor, ...props } = this.props;
    const buttonClasses = [s.root];
    // e.g. effect = 1b should add cass effects and effects-1b
    if (effect.length > 0) {
      const fxNum = Number(effect[0]);
      if (!fxNum > 0) {
        throw Error(`${effect} is not a valid effect`);
      }
      const fx = fxs[fxNum - 1];
      buttonClasses.push(base.fx);
      buttonClasses.push(fx[`fx-${effect}`]);
      buttonClasses.push(fx[`fx-${fxNum}`]);
      // this class is for overriding styles
      buttonClasses.push('creative-btn');
    }

    return (
      <div
        className={buttonClasses.join(' ')}
        ref={handleRef}
      >
          <button {...props} >
            {txt || children}
          </button>
      </div >
    );
  }
}

export default Btn;
