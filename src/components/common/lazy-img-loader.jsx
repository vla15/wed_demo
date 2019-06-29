/* eslint-disable func-names */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';
import './lazy-img-loader.css';

// eslint-disable-next-line wrap-iife
const browser = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
const isSafari = browser[1] === 'Safari';

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.backgroundImageRef = null;
    this.setBackgroundImageRef = (element) => {
      this.backgroundImageRef = element;
    };
    this._imageLoader = null;
  }

  onLoad() {
    this.setState({ isLoading: false });
  }

  render() {
    const { src } = this.props;
    const { isLoading } = this.state;
    const style = {
      display: isLoading ? 'none' : '',
      height: isSafari ? '100%' : 'auto',
    };
    const containerStyle = {
      display: isLoading ? 'flex' : '',
      width: isLoading ? '100%' : '',
      alignSelf: isLoading ? 'stretch' : '',
    };
    return (
      <div className="hatesafari" style={isLoading ? containerStyle : {}}>
        {isLoading ? (
          <div className="buggeroo" style={{ display: 'flex', width: '100%', position: 'relative' }}>
            <Spinner />
          </div>
        ) : ''}
        <img
          ref={this.setBackgroundImageRef}
          className="our-story-image fade-in"
          src={src}
          onLoad={this.onLoad.bind(this)}
          style={style}
        />
      </div>
    );
  }
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyImage;
