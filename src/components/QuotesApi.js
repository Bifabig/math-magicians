import { useEffect, useState } from 'react';

const QuotesApi = () => {
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const options = {
          method: 'GET',
          headers: {
            'x-api-key': 'btAEiRrit9u1L1sZDM0Oew==si2rJMo7DAvCioHN',
            'Content-Type': 'application/json',
          },
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
  }, [setQuotes, setIsLoading]);

  return { quotes, hasError, isLoading };
};

export default QuotesApi;
