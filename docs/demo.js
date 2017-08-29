import React from 'react';
import CreativeBtn from '../dist/CreativeBtn';

import './demo.css';

class Demo extends React.PureComponent {
  componentWillUnmount() {
    this.ref.parentNode.style.background = this.originalBg;
  }

  handleRef = (ref) => {
    if (!this.ref) {
      this.ref = ref;
      this.originalBg = ref.parentNode.style.background;
      ref.parentNode.style.background = 'rgb(14,131,205)';
    }
  };
  render() {
    return (
      <div className="demo-root" ref={this.handleRef}>
        <div className="demo-btns-container" >
          <CreativeBtn
            txt="Hello World!"
            effect="1a"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
          <CreativeBtn
            txt="Hello World!"
            effect="1b"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
          <CreativeBtn
            txt="Hello World!"
            effect="1c"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
          <CreativeBtn
            txt="Hello World!"
            effect="1d"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
          <CreativeBtn
            txt="Hello World!"
            effect="1e"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
          <CreativeBtn
            txt="Hello World!"
            effect="1f"
            bg="rgb(14,131,205)"
            hoverColor="rgb(14,131,205)"
            hoverBg="white"
            color="white"
          />
        </div >
      </div >
    );
  }
}

export default Demo;
