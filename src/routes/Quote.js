import QuotesApi from '../components/QuotesApi';
import Quotes from '../components/Quotes';
import styles from '../styles/Quote.module.scss';

const Quote = () => {
  const api = QuotesApi();
  if (api.hasError) return <div>Something went wrong!</div>;
  if (api.isLoading) return <div>Loading...</div>;

  return (
    api.quotes && (
      <div className={styles.quote}>
        <Quotes quotes={api.quotes} />
      </div>
    )
  );
};

export default Quote;
