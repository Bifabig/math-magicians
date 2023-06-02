import PropTypes from 'prop-types';

const Display = ({ currentValue }) => (
  <div className="display">{currentValue}</div>
);

Display.defaultProps = { currentValue: '' };
Display.propTypes = { currentValue: PropTypes.string };

export default Display;
