import { useEffect, useState } from 'react';
import Display from './Display';
import InputValues from './InputValues';
import Quotes from './Quotes';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const options = {
          method: 'GET',
          headers: { 'x-api-key': 'btAEiRrit9u1L1sZDM0Oew==si2rJMo7DAvCioHN' },
        };
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          options,
        );
        const json = await res.json();
        setQuotes(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="quote">
        <Quotes quotes={quotes} />
      </div>
      <div className="calculator">
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
