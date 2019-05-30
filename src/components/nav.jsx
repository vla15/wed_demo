/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './nav.css';
import { Link, withRouter } from 'react-router-dom';
import * as moment from 'moment';
import Routes from '../enums/routes';
// import './hatachi.regular.ttf';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  }

  render() {
    const { location } = this.props;
    const { isCollapsed } = this.state;
    const show = isCollapsed ? 'show' : '';
    const navbarContainer = {};
    navbarContainer.style = {
      position: location.pathname === '/' ? 'absolute' : '',
    };
    const diff = moment('2019-12-21').diff(moment().startOf('day'), 'days');
    const wedStatus = diff > 0 ? `Days Left: ${diff}` : 'Married';
    return (
      <div className="navbar-container" style={{ ...navbarContainer.style }}>
        <div className="navbar-subtext">
          <div>December 21st 2019</div>
          <div>{wedStatus}</div>
        </div>
        <nav className="navbar navbar-light navbar-expand-md">
          <h2 className="navbar-name-header">Betty & Vincent</h2>
          <button onClick={this.onClick} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${show}`} id="navbar1">
            <ul className="navbar-nav ml-auto mr-auto">
              {Routes.map(({ path, title }) => {
                const isActive = path === location.pathname ? 'active' : '';
                return (
                  <li className={`nav-item ${isActive}`} key={path} onClick={this.onClick}>
                    <Link to={path} className="nav-link">{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
