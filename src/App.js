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
      backgroundImage: `url(${process.env.PUBLIC_URL}/Website_backgroundv8.jpg)`,
      display: 'flex',
      minHeight: '100%',
      backgroundRepeatY: 'repeat',
    };
    const appContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };
    return (
      <div className="app-background" style={containerStyle}>
        <div className="app-container" style={appContainerStyle}>
          <Router>  
            <Nav />
            <Route 
              render={({ location }) => {
                const fullPageStyle = {
                  display: 'flex',
                };
                const contentPageStyle = {
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                };
                if (location.pathname === '/' || location.pathname === '/story' || location.pathname === '/gallery') {
                  contentPageStyle.flex = '1';
                  fullPageStyle.flex = '1';
                }
                return (
                  <div className="full-page" style={fullPageStyle}>
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="content-page"
                      >
                        <Switch location={location}>
                          {Routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path}>
                              <div className="content-page" style={contentPageStyle}>
                                <Component />
                              </div>
                            </Route>
                          ))}
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                );
              }}
            />
          </Router>
        </div>
      </div>
    );
  }
}


export default App;
