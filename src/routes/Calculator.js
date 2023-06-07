import { useState } from 'react';
import Display from '../components/Display';
import InputValues from '../components/InputValues';
import styles from '../styles/Calculator.module.scss';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className={styles.container}>
      <h2>Lets do some math!</h2>
      <div className={styles.calculator}>
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
    </div>
  );
};

export default Calculator;
