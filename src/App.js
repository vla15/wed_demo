/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Nav from './components/nav';
import Routes from './enums/routes';

class App extends Component {
  render() {
    const containerStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/background_photo_other.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };
    return (
      <div style={containerStyle}>
        <Router>
          <Nav />
          <div className="content-container">
          <Route 
            render={({ location }) => (
              <div className="full-page">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="content-page"
                  >
                    <Switch location={location}>
                      {Routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                          <div className="content-page">
                            <Component />
                          </div>
                        </Route>
                      ))}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            )}
          />
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
