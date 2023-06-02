import PropTypes from 'prop-types';

const Quotes = ({ quotes }) => (
  <ul>
    {quotes.map((item) => (
      <li key={quotes[0]}>{item.quote}</li>
    ))}
  </ul>
);

export default Quotes;

Quotes.defaultProps = { quotes: {} };
Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
