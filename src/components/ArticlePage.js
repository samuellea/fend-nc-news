import React, { Component } from 'react';
import * as api from './api';
import CommentList from './CommentList';
import Voter from './Voter';

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  }
  render() {
    const {article, comments, isLoading} = this.state;
    const {loggedInUser, handleVoteInApp} = this.props;
    return (
      <>
      {isLoading ? 
      <p>Loading...</p> :  
      <div>
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>{article.body}</p>
      <br/>
      <Voter votes={article.votes} article_id={article.article_id} handleVoteInApp={handleVoteInApp}/>
      <br/>
      <CommentList comments={comments} article_id={article.article_id} loggedInUser={loggedInUser} />
      </div>
      }
      </>
    )
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id)
    .then(({article}) =>{
      this.setState({article, isLoading: false});
    })

  }
}

export default ArticlePage;