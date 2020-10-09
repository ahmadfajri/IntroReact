import React from 'react';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello name={[1, 2, 3]} />
    </div>
  );
}

export default App;
