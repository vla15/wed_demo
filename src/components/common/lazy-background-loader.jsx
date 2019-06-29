/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';
import './lazy-background-loader.css';

class LazyBackground extends Component {
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

  componentDidMount() {
    if (this.backgroundImageRef.style.backgroundImage) {
      const url = this.backgroundImageRef.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
      this._imageLoader = new Image();
      this._imageLoader.onload = () => {
        this.setState({ isLoading: false });
      };
      this._imageLoader.src = url;
    }
  }

  render() {
    const { src } = this.props;
    const { isLoading } = this.state;
    const style = {
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };
    return (
      <div className="image-loader-container">
        { isLoading ? <Spinner /> : ''}
        <div ref={this.setBackgroundImageRef} className="background-image fade-in" style={style} />
      </div>
    );
  }
}

LazyBackground.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyBackground;
