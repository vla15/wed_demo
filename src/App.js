import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { routes } from './enums/enums';



class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="content-container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="content-page"
                  unmountOnExit
                >
                  <div className="content-page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
