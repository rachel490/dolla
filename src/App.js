import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Router >
        <Home />
      </Router>
    </div>
  );
}

export default App;
