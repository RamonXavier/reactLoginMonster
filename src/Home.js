import React from 'react';
import logo from './logo.png';
import './App.css';
import Card from "./components/Card";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    <p className="App-intro">
      <Link to="/">Ir para a página inicial \o/</Link>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    </header>
    </div>
  );
}

export default App;
