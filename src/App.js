import React from 'react';
import logo from './logo.png';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card label="Logar" label2="Salvar" /><br/>
      </header>
    </div>
  );
}

export default App;
