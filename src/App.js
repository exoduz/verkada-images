import React from 'react';
import logo from './logo.svg';
import './App.css';

import SecurityImages from './security-images';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <SecurityImages />
    </div>
  );
}

export default App;
