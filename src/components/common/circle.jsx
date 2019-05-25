/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import './circle.css';

const Circle = ({ value, toggle, isActive }) => (
  <div
    className="circle-icon"
    style={isActive ? { backgroundColor: 'lightBlue' } : { backgroundColor: 'white' }}
    onClick={() => toggle(value)}
    role="presentation"
  >
    <span>{value}</span>
  </div>
);

// Circle.propTypes = {
//   value: PropTypes.string.isRequired,
//   toggle: PropTypes.func.isRequired,
//   isActive: PropTypes.bool.isRequired,
// };

export default Circle;
