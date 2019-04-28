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
      <div className="home-body">
        <div className="home-body-splash" style={style}>
        </div>
      </div>
    );
  }
}

export default Home;