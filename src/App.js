import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Router>
          <Home path="/" />
        </Router>
    </div>
  );
}

export default App;
