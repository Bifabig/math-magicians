import PropTypes from 'prop-types';
import styles from '../styles/Quotes.module.scss';

const Quotes = ({ quotes }) => (
  <div className={styles.center}>
    <ul>
      {quotes.map((item) => (
        <li key={quotes[0]}>{item.quote}</li>
      ))}
    </ul>
  </div>
);

export default Quotes;

Quotes.defaultProps = { quotes: {} };
Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
