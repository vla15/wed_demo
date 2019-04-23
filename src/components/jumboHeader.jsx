import React, { Component } from 'react';
import CarouselHeader from './carousel';
import './jumboHeader.css';

class JumboHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      flex: 1,
      backgroundImage: `url(${process.env.PUBLIC_URL}/splash.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    };
    return (
      <div className="header-container" style={style}>
      </div>
    );
  }
}

export default JumboHeader;