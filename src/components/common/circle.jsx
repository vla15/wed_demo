import React from 'react';
import './circle.css';

const Circle = ({ value, toggle, isActive }) => (
  <div className="circle-icon" 
    style={isActive ? { backgroundColor: 'lightBlue' } : { backgroundColor: 'white' }}
    onClick={() => toggle(value)}
  >
    <span>{value}</span>
  </div>
);

export { Circle };
