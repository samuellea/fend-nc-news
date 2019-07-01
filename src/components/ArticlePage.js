import React, { Component } from 'react';
import * as api from './api';
import CommentList from './CommentList';
import Voter from './Voter';
import Error from './Error';
import loadingSpinner from './Rolling-1s-200px.gif';

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  }
  render() {
    const {article, comments, isLoading, error} = this.state;
    const {loggedInUser} = this.props;
    if (isLoading) return <img className="loadingSpinner" src={loadingSpinner} alt="loading..." />
    if (error) return <Error error={error}/>
    return (
      <>
      <div className="articlePage">
      <h3 style={{fontSize: '150%'}}>{article.title}</h3>
      <h4>by {article.author}</h4>
      <p className='articleBody'>{article.body}</p>
      <br/>

      <div className='articlePageVoter'>
      <Voter votes={article.votes} article_id={article.article_id} loggedInUser={loggedInUser} key={`voter_${article.article_id}`}/>
      </div>

      <br/>
      <div style={{textAlign: 'center'}}>
      <CommentList comments={comments} article_id={article.article_id} username={loggedInUser.username} />
      </div>

      </div>
      </>
    )
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id)
    .then(({article}) =>{
      this.setState({article, isLoading: false});
    }).catch(err => {
      this.setState({isLoading: false, error: err}) // or the error itself
    })
  }

}

export default ArticlePage;