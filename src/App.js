import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Router>
          <Home path="/" />
          <ArticleList path="/topics/:topic"/>
          <ArticlePage path="/articles/:article_id" />
        </Router>
    </div>
  );
}

export default App;
