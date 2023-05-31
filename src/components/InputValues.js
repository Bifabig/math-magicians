import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const InputValues = ({
  data, setData, setCurrentValue, values,
}) => {
  const onClickHandler = (value) => {
    const result = calculate(data, value);
    console.log(result);

    if (result.operation && !result.next) {
      setData({ total: result.total, next: null, operation: result.operation });
    } else if (result.operation && result.next) {
      setData({
        total: result.total,
        next: result.next,
        operation: result.operation,
      });
    } else {
      setData({ ...data, next: result.next });
    }
    setCurrentValue(value);
  };
  return (
    <div className="values">
      {values.map((value) => (
        <button
          onClick={() => onClickHandler(value)}
          type="button"
          key={value}
          className="value"
        >
          {value}
        </button>
      ))}
    </div>
  );
};

InputValues.defaultProps = { values: [] };
InputValues.defaultProps = { data: {} };
// InputValues.defaultProps = { currentValue: [] };
InputValues.propTypes = { values: PropTypes.arrayOf(PropTypes.string) };
InputValues.propTypes = { data: PropTypes.objectOf(PropTypes.string) };
// InputValues.propTypes = { currentValue: PropTypes.arrayOf(PropTypes.string) };
InputValues.propTypes = { setCurrentValue: PropTypes.func.isRequired };
InputValues.propTypes = { setData: PropTypes.func.isRequired };

export default InputValues;
