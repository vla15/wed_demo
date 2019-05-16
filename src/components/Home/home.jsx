import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const style = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/splash.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100%',
      width: '100%'
    };
    return (
      <div className="home-body">
        <div className="mobile-home-body-splash" style={style}></div>
        <img className="desktop-home-body-splash" src={`${process.env.PUBLIC_URL}/splash.jpg`}/>
      </div>
    );
  }
}

export default Home;