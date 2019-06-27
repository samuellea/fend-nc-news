import React, { Component } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  state = {
    loggedInUser: 'jessjelly'
  }
  render() {
    const {loggedInUser} = this.state
    return (
      <div className="App">
        <Header/>
        <NavBar />
        <Router>
            <ArticlesList path="/"/>
            <ArticlesList path="/topics/:topic"/>
            <ArticlePage path="/articles/:article_id" loggedInUser={loggedInUser}/>
          </Router>
      </div>
    );
  }

}

export default App;
