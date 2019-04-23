import React, { Component } from 'react';
import JumboHeader from './jumboHeader.jsx';
import './body.css';

class BodyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content-container">
        <JumboHeader />
      </div>
    )
  }
}

export default BodyComponent;