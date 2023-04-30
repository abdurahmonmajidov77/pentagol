import './App.css';
import { RoutesComponent } from './router';
import useLocalStorage from 'use-local-storage'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router';

function App() {
  // const path = window.location.href
  const p = useLocation()
  const path = p.pathname
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', dark ? 'dark' : 'light')
  // const 
  return (
    <div className="App">
      {path == '/admin' ? null : <Navbar/>}
      <RoutesComponent/>
    </div>
  );
}

export default App;
