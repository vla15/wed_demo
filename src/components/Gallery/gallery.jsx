import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { Images } from '../../enums/images';

class GalleryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var images =
      Images.map(i => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
          </div>);
        return i;
      });
    return (
      <div className="non-splash-container">
        <h2>Gallery</h2>
        <Gallery images={images} backdropClosesModal={true}/>
      </div>
    )
  }
}

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};


export default GalleryPage;