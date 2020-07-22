import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = '81444b84';
  const APP_KEY = '5be88a11b270fd7c07ff10a0564983f2';

  const [counter, setCounter] = useState(0);

  useEffect( () => {
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
