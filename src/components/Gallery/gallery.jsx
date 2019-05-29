/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Images from '../../enums/images';
import './gallery.css';

class GalleryPage extends Component {
  render() {
    const captionStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      maxHeight: '240px',
      overflow: 'hidden',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      color: 'white',
      padding: '2px',
      fontSize: '90%',
    };
    const images = Images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
        </div>
      );
      return i;
    });
    return (
      <div>
        <div style={{
          textAlign: 'center', color: '#e2e4e9', fontSize: '2rem', padding: '2rem',
        }}
        >
          Gallery
        </div>
        <div>
          <Gallery images={images} backdropClosesModal />
        </div>
      </div>
    );
  }
}

export default GalleryPage;
