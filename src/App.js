import React, { Component } from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";
import Error from './components/Error';
import './styles/App.css';

class App extends Component {
  state = {
    loggedInUser: {
      username: 'jessjelly'
    }
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Header />
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" loggedInUser={loggedInUser} />
          <Error default />
        </Router>
      </div>
    );
  }

}

export default App;



