/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import LazyBackground from '../common/lazy-background-loader';
import './story.css';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: null,
      isClicked: false,
    };
    this.storyText = 'Betty said to remove this text because she was embarassed about what she had wrote here.   We will continue to write in here as time progresses.  Work in Construction!';
    this.getStoryText = this.getStoryText.bind(this);
    this.onClick = this.onClick.bind(this);
    this._resizeListener = null;
  }

  componentDidMount() {
    this._resizeListener = () => {
      this.setInnerWidth();
    };
    window.addEventListener('resize', this._resizeListener);
    this.setInnerWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener);
  }

  onClick() {
    this.setState(prevState => (
      { isClicked: !prevState.isClicked }
    ));
  }

  setInnerWidth() {
    this.setState({ innerWidth: window.innerWidth });
  }

  getStoryText(style) {
    return (
      <div style={style}>
        <h4 style={{ textAlign: 'center' }}>Our Story</h4>
        {this.storyText}
      </div>
    );
  }

  generateMobileContent() {
    const src = '/splash.jpeg';
    const { isClicked } = this.state;
    const isActive = isClicked ? 'active' : '';
    const backTextStyling = {
      zIndex: 2,
      padding: '2rem',
    };
    return (
      <div className="story-container">
        <div className={`flipper-container ${isActive}`} onClick={this.onClick}>
          <div className="flipper">
            <div className="front story-image-container">
              <LazyBackground src={src} />
            </div>
            <div className="back story-text-container">
              {this.getStoryText(backTextStyling)}
              <div className="story-overlay" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  generateDesktopContent() {
    const src = '/splash.jpeg';
    return (
      <div className="story-container">
        <div className="story-overlay" />
        <div className="story-image-container">
          <LazyBackground src={src} />
        </div>
        <div className="story-text-container">
          <div className="story-text">
            {this.getStoryText()}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { innerWidth } = this.state;
    const isMobile = innerWidth <= 767;
    // const hidden = {
    //   display: isClicked ? 'none' : 'flex',
    // };
    // const hideStoryText = {
    //   display: innerWidth <= 767 ? 'none' : 'flex',
    // };
    if (innerWidth === null) {
      return '';
    }
    return isMobile ? this.generateMobileContent() : this.generateDesktopContent();
  }
}

// <img className="story-image" src={`${process.env.PUBLIC_URL}/splash.jpeg`} />

export default Story;
