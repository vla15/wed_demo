import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/home.jsx';
import Wedding from './components/Wedding/wedding';
import Story from './components/Story/story';
import Gallery from './components/Gallery/gallery';
import Nav from './components/nav.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: "/home", Component: Home },
  { path: "/story", Component: Story },
  { path: "/gallery", Component: Gallery },
  { path: "/wedding", Component: Wedding }
]

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
