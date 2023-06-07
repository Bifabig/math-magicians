import PropTypes from 'prop-types';
import styles from '../styles/Display.module.scss';

const Display = ({ currentValue }) => (
  <div className={styles.display}>{currentValue}</div>
);

Display.defaultProps = { currentValue: '' };
Display.propTypes = { currentValue: PropTypes.string };

export default Display;
