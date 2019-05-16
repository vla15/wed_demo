import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.jsx'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes } from './enums/routes';



class App extends Component {
  render() {
    return (
      <div style={containerStyle} >
        <Router>
          <Nav />
          <div className="content-container">
          <Route 
            render={({ location }) => (
              <div className="full-page">
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/home" />}
                />

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

const containerStyle = {
  height: '100%',
  width: '100%',
  backgroundImage: `url(${process.env.PUBLIC_URL}/background_photo.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

export default App;
