import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import styles from '../styles/InputValues.module.scss';

const InputValues = ({
  data, setData, setCurrentValue, values,
}) => {
  const onClickHandler = (value) => {
    const result = calculate(data, value);
    setData({ ...result });
    if (value === '=' || value === '+/-') {
      setCurrentValue(result.total);
      if (result.total === null) {
        setCurrentValue(result.next);
      }
    } else if (value === 'AC') {
      setCurrentValue('');
    } else {
      setCurrentValue(result.next);
      if (result.next === null) {
        setCurrentValue(result.operation);
      }
    }
  };
  return (
    <div className={styles.values}>
      {values.map((value) => (
        <button
          onClick={() => onClickHandler(value)}
          type="button"
          key={value}
          className={styles.value}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

InputValues.defaultProps = { values: [] };
InputValues.defaultProps = { data: {} };
InputValues.propTypes = { values: PropTypes.arrayOf(PropTypes.string) };
InputValues.propTypes = { data: PropTypes.objectOf(PropTypes.string) };
InputValues.propTypes = { setCurrentValue: PropTypes.func.isRequired };
InputValues.propTypes = { setData: PropTypes.func.isRequired };

export default InputValues;
