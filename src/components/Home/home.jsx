import React, { Component } from 'react';
import './home.css';

class Home extends Component {
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
      <div id="content-container">
        <div className="header-container" style={style}>
        </div>
      </div>
    );
  }
}

export default Home;