/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { OurLivesMoments, EngagementMoments } from '../../enums/images';
import './gallery.css';

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGallery: 'ourlives',
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    const currentGallery = e.target.getAttribute('name');
    this.setState({ currentGallery });
  }

  generateGallery() {
    const { currentGallery } = this.state;
    let gallery;
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
    const OurLivesImages = OurLivesMoments.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
        </div>
      );
      return i;
    });
    const EngagementImages = EngagementMoments.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
        </div>
      );
      return i;
    });
    switch (currentGallery) {
      case 'ourlives':
        gallery = <Gallery images={OurLivesImages} backdropClosesModal />;
        break;
      case 'engagement':
        gallery = <Gallery images={EngagementImages} backdropClosesModal />;
        break;
      default:
        gallery = <Gallery images={OurLivesImages} backdropClosesModal />;
    }
    return gallery;
  }

  generateHeader() {
    const { currentGallery } = this.state;
    const btns = [{ name: 'ourlives', label: 'Our Lives' }, { name: 'engagement', label: 'Engagement' }];
    return btns.map((btn) => {
      const isActive = btn.name === currentGallery ? 'active' : '';
      return <div key={btn.name} onClick={this.onToggle} className={`gallery-link ${isActive}`} name={btn.name}>{btn.label}</div>;
    });
  }

  render() {
    return (
      <div>
        <div style={{
          display: 'flex',
          color: '#e2e4e9',
          fontSize: '1rem',
          padding: '1rem',
          justifyContent: 'center',
        }}
        >
          {this.generateHeader()}
        </div>
        {this.generateGallery()}
      </div>
    );
  }
}

export default GalleryPage;
