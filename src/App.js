import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ChatComponent from './components/Chat/ChatComponent'
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(16); // ustawienie rozmiaru czcionki 
  const [isDarkMode, setIsDarkMode] = useState(false); // ustawienie trybu jasnego 
  const [statechat, setStatechat] = useState(false); // ustawienie tryby chatu

  const chateState = () =>{
    setStatechat(!statechat);
  }

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // zwiększenie rozmiaru czcionki o 2px
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2); // zmniejszenie rozmiaru czcionki o 2px
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // przełączenie trybu kolorystycznego między jasnym a ciemnym
  };

  return (
    <div>
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'} style={{ fontSize: `${fontSize}px` }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Główna</Link>
            </li>
            <li>
              <Link to="/sklep">Sklep</Link>
            </li>
            <li>
              <Link to="/o-nas">O nas</Link>
            </li>
          </ul>
          <button onClick={increaseFontSize}>A++</button>
          <button onClick={decreaseFontSize}>A--</button>
          <button onClick={toggleDarkMode}>{isDarkMode ? 'Jasny tryb' : 'Ciemny tryb'}</button>
          <button onClick={chateState}>Czat</button>
        </nav>

        <div>
         
        </div>

        <Routes>
          <Route path="/sklep" element={<Shop/>}>
          </Route>
          <Route path="/o-nas"  element={<About/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    <ChatComponent show={statechat}/>
    </div>
  );
}

export default App;
