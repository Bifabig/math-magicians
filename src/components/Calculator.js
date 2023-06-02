import { useState } from 'react';
import Display from './Display';
import InputValues from './InputValues';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  return (
    <div className="container">
      <Display currentValue={currentValue} />
      <InputValues
        data={data}
        setData={setData}
        setCurrentValue={setCurrentValue}
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
};

export default Calculator;
