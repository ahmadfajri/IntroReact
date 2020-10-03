import React from 'react';
import './App.css';
import Article from './Article';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Article userLogin="sudah login" />
      </header>
    </div>
  );
}

export default App;
