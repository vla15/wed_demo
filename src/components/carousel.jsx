import React, { Component } from 'react';

class CarouselHeader extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ process.env.PUBLIC_URL + '/splash.jpg' } alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselHeader;