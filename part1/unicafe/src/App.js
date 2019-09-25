import React from 'react';
import Ratings from './components/ratings/ratings.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Unicafe</h1>
      </header>
      <div>
      <Ratings />
      </div>
    </div>
  );
}

export default App;
