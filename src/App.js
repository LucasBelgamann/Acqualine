import './App.css';
import ProviderHeater from './context/Provider';
import Home from './pages/Home';

function App() {
  return (
    <ProviderHeater>
      <Home />
    </ProviderHeater>
  );
}

export default App;
