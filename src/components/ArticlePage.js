import React, { Component } from 'react';
import * as api from './api';
import CommentList from './CommentList';
import Voter from './Voter';
import Error from './Error';
import loadingSpinner from '../Rolling-1s-200px.gif';
import '../styles/ArticlePage.css';

const moment = require('moment');

class ArticlePage extends Component {
  state = {
    article: {},
    avatar_url: '',
    name: '',
    isLoading: true,
    error: null
  }
  render() {
    const {article, comments, isLoading, error, avatar_url, name} = this.state;
    const {loggedInUser} = this.props;
    if (isLoading) return <div class="loader">Loading...</div>
    if (error) return <Error error={error}/>

    const dateAuthored = moment(article.created_at).format('MMM Do YYYY');
    const openAngle = "< "
    const closeAngle = " />"

    return (
      <>
      <div className="articlePage">

  <div className="articleMainContainer">

  <div className="articleVoterContainer">

  <div className="articleVoterContainer">
      <Voter votes={article.votes} article_id={article.article_id} loggedInUser={loggedInUser} key={`voter_${article.article_id}`}/>
      </div>

  </div>

  <div className="articleTitle">
    <span>

    <span style={{color: "darkred"}}>{openAngle}</span>
    <span>{article.title}</span>
    <span style={{color: "darkred"}}>{closeAngle}</span>

    </span>
    
  </div>

  <div className="articleAuthorInfo-container">

<div className="articleAuthorInfo-outer">
<div className="author">by {name}</div>
<div className="date">🕑{dateAuthored}</div>

</div>



      
  </div> 
  <div className="avatar">
  <img src={avatar_url} className="avatarImg"/>
  </div>
  <div className="articleBody">{article.body}</div>

  </div>
  </div>



      <br/>
      <div className="articleCommentList">
      <CommentList comments={comments} article_id={article.article_id} username={loggedInUser.username} />
      </div>

      </>
    )
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id)
    .then(({article}) =>{
      const authorAvatar = api.getUserById(article.author);
      return Promise.all([article, authorAvatar])
    })
    .then(([article, {avatar_url, name}])=> {
      this.setState({article, isLoading: false, avatar_url, name});
    })
    // .catch(err => {
    // this.setState({isLoading: false, error: err}) // or the error itself
    // })
  }
}

export default ArticlePage;



// componentDidMount() {
//   const { article_id } = this.props;
//   api.getArticleById(article_id)
//   .then(({article}) =>{
//     this.setState({article, isLoading: false});
//   }).catch(err => {
//     this.setState({isLoading: false, error: err}) // or the error itself
//   })
// }