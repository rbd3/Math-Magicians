import './App.css';
import Calculator from './components/Calculator';
import FetchQuote from './components/ApiData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Magicians</h1>
      </header>
      <FetchQuote />
      <Calculator />
    </div>
  );
}

export default App;
