import Display from './Display';
import InputValues from './InputValues';

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

export default Calculator;
