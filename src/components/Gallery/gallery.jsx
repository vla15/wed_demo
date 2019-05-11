import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:4000/gallery')
      .then(res => console.log('the res', res));
  }

  render() {
    return (
      <div className="non-splash-container">
        Gallery Section.
      </div>
    )
  }
}

export default Gallery;