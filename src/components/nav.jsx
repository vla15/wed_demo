import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { routes } from '../enums/enums';
import { withRouter } from 'react-router-dom';

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
    const { location } = this.props
    const { isCollapsed } = this.state;
    const show = isCollapsed ? 'show' : '';
    const navbarContainer = {};
    navbarContainer.style = {
      position: location.pathname === '/home' ? 'absolute' : ''
    }
    return (
      <div className="navbar-container" style={{ ...navbarContainer.style }}>
        <nav className="navbar navbar-light navbar-expand-md">
          <button onClick={this.onClick} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={ 'collapse navbar-collapse ' + show } id="navbar1">
            <ul className="navbar-nav ml-auto">
              {routes.map(({ path, title }) => {
                const isActive = path === location.pathname ? 'active' : '';
                return (
                  <li className={'nav-item ml-auto ' + isActive} key={path}>
                    <Link to={path} className="nav-link">{title}</Link>
                  </li>
                )})}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Nav);