import './App.css';
import { RoutesComponent } from './router';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router';

function App() {
  const p = useLocation()
  const path = p.pathname
  return (
    <div className="App">
      {path == '/admin' ? null : <Navbar/>}
      <RoutesComponent/>
    </div>
  );
}

export default App;
