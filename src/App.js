import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import ThemeContext from './components/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider>
      <div className={`App ${theme}`}>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
        <div className="headers">
          <h1>Pedicate the gender of</h1>
          <h1>a Person based on your name</h1>
        </div>
        <SearchBar theme={theme}/>
      </div>
    </ThemeContext.Provider>
      
    
  );
}

export default App;
