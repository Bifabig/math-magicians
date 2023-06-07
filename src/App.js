import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Quote from './routes/Quote';
import Calculator from './routes/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
