import React, { Component } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  state = {
    loggedInUser: 'jessjelly',
    itemVotes: {
      articles: [],
      comments: []
    }
  }

  render() {
    const {loggedInUser} = this.state
    return (
      <div className="App">
        <Header/>
        <NavBar />
        <Router>
            <ArticlesList path="/" handleVoteInApp={this.handleVoteInApp}/>
            <ArticlesList path="/topics/:topic" handleVoteInApp={this.handleVoteInApp}/>
            <ArticlePage path="/articles/:article_id" loggedInUser={loggedInUser} handleVoteInApp={this.handleVoteInApp}/>
          </Router>
      </div>
    );
  }

  handleVoteInApp = (id) => {
    console.log('reaching handleVote...')
    console.log(id);
  }

}

export default App;

////////// example of finalised itemVotes state key...

    // itemVotes: {
    //   articles: [
    //     {
    //       article_id: 1,
    //       voteChange: 1
    //     }
    //   ],
    //   comments: [
    //     {
    //       comment_id: 9,
    //       voteChange: -1
    //     }
    //   ]
    // }