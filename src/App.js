import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import QuotesApi from './components/QuotesApi';

function App() {
  const api = QuotesApi();
  if (api.hasError) return <div>Something went wrong!</div>;
  if (api.isLoading) return <div>Loading...</div>;

  return (
    api.quotes && (
      <div className="App">
        <div className="container">
          <div className="quote">
            <Quotes quotes={api.quotes} />
          </div>
          <Calculator />
        </div>
      </div>
    )
  );
}

export default App;
