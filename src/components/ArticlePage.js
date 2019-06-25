import React, { Component } from 'react';
import axios from "axios";
import * as api from './api';
import CommentList from './CommentList';

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
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
        <h4 style={{textAlign: 'left', marginLeft: '2%'}}>Comments ({comments.length})</h4>
        {comments.length > 0 ? <CommentList comments={comments}/> : null }
        </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id)
    .then(({article, comments}) =>{
      this.setState({article, comments, isLoading: false});
    })

  }
}

export default ArticlePage;