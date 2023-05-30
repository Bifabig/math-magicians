import PropTypes from 'prop-types';

const Calculator = () => (
  <div className="container">
    <Display />
    <InputValues
      values={[
        'AC',
        '+/-',
        '%',
        '÷',
        '7',
        '8',
        '9',
        'x',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '0',
        '.',
        '=',
      ]}
    />
  </div>
);

const Display = () => <div className="display">0</div>;

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

export default Calculator;
