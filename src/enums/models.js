import PropTypes from 'prop-types';

const GuestPropType = PropTypes.shape({
  ref: PropTypes.number,
  guests: PropTypes.number,
  first: PropTypes.string,
  last: PropTypes.string,
  full: PropTypes.string,
  isReserved: PropTypes.bool,
});

export default GuestPropType;
