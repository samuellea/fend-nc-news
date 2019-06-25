import React, { Component } from 'react';
import * as api from './api';
import CommentList from './CommentList';
import Voter from './Voter';

class ArticlePage extends Component {
  state = {
    article: {},
    // comments: [],
    isLoading: true
  }
  render() {
    const {article, comments, isLoading} = this.state;
    if (isLoading) return <p>Loading...</p>
    return (
      <div>
        <h3>{article.title}</h3>
        <h4>{article.author}</h4>
        <p>{article.body}</p>
        <br/>
        <Voter votes={article.votes}/>
        <br/>
        {/* {comments.length > 0 ? <CommentList comments={comments} article_id={article.article_id}/> : null } */}
        <CommentList comments={comments} article_id={article.article_id}/>
        </div>
    );
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