import PropTypes from 'prop-types';

const InputValues = ({ values }) => (
  <div className="values">
    {values.map((value) => (
      <div key={value} className="value">
        {value}
      </div>
    ))}
  </div>
);

InputValues.defaultProps = { values: [] };
InputValues.propTypes = { values: PropTypes.arrayOf(PropTypes.string) };

export default InputValues;
