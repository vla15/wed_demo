import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState, props) => {
      return { isCollapsed: !prevState.isCollapsed };
    })
  }

  render() {
    const { isCollapsed } = this.state;
    let show = '';
    if (isCollapsed) {
      show = 'show';
    }
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-light navbar-expand-md">
          <button onClick={this.onClick} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={ 'collapse navbar-collapse ' + show } id="navbar1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-auto">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link to="/story" className="nav-link">Our Story</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link to="/wedding" className="nav-link">The Wedding</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;