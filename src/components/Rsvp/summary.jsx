/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './summary.css';

const RSVPSummary = ({ names, restrictions, email }) => (
  <div className="summary-container">
    <h6>Guests:</h6>
    <div className="summary-content">
      {names.map((name, i) => (
        <div key={i}>{name}</div>
      ))}
    </div>
    <h6>Dietary Restrictions</h6>
    <div className="summary-content">{restrictions}</div>
    <h6>Email</h6>
    <div className="summary-content">{email}</div>
  </div>
);

RSVPSummary.propTypes = {
  names: PropTypes.array.isRequired,
  restrictions: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default RSVPSummary;
