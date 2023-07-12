import './App.css';
import Calculator from './components/Calculator';
import { Routes, Route } from 'react-router-dom';
import FetchQuote from './components/ApiData';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<FetchQuote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
