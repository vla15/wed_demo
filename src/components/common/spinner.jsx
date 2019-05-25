/* eslint-disable react/forbid-prop-types */
import React from 'react';
import './spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({ style }) => (
  <div className="spinner-container" style={style}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

Spinner.propTypes = {
  style: PropTypes.object,
};

Spinner.defaultProps = {
  style: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: '100000',
  },
};

export default Spinner;
