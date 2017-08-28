import React from 'react';
import CreativeBtn from '../dist/CreativeBtn';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div className="demo-root" >
        <div className="demo-btns-container" >
          <CreativeBtn txt="Hello World" effect="1a" />
          <CreativeBtn txt="Hello World" effect="1b" />
          <CreativeBtn txt="Hello World" effect="1c" />
          <CreativeBtn txt="Hello World" effect="1d" />
          <CreativeBtn txt="Hello World" effect="1e" />
          <CreativeBtn txt="Hello World" effect="1f" />
        </div >
      </div >
    );
  }
}

export default Demo;
