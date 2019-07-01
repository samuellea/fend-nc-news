import React, { Component } from 'react';
import * as api from './api';
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  }
  render() {
    const {comments, isLoading} = this.state;
    const {article_id, username} = this.props;
    console.log(username, ' ====== username')

    return (
      <>
      {isLoading ? <p>Loading comments...</p> : 

      <div className="commentListContainer">

        <div className="commentList-commentsNumber">
        <h4 style={{textAlign: 'left', margin: 'auto', paddingBottom: '1%'}}>Comments ({comments.length})</h4>
        </div>

        <div className="commentList-commentInput">
        <CommentInput addNewComment={this.addNewComment} article_id={article_id} username={username}/>
        </div>

      </div>

        // <section style={{width: '80%', margin: 'auto'}}>
        //    {comments.map(comment=> (
        //       <CommentCard comment={comment} deleteComment={this.deleteComment} key={comment.comment_id} username={username}/>
        //       ))}
        // </section>

      }
      </>
    );
  }

  addNewComment = newComment => {
      this.setState(prevState => {
        const {comments} = this.state;
        return {
          comments: [newComment, ...comments]
        }
      })
  }

  deleteComment = (comment_id) => {
    const {comments} = this.state;

    if (window.confirm('Are you sure you want to delete your comment?')) {
      api.deleteCommentById(comment_id).catch(err => {
        this.setState({
          comments: comments
        }, ()=>{
          alert('Comment could not be deleted!')
        })
      })

      let indexToDelete = comments.findIndex((comment)=> comment.comment_id === comment_id);
      let commentsMinusDeleted = [...comments].reduce((acc, comment, i) => {
        if (i !== indexToDelete) acc.push(comment);
        return acc;
      }, [])
      this.setState({
        comments: commentsMinusDeleted
      })
  } 
  }

  componentDidMount() {
    console.log('CommentList componentDidMount...')
    const {article_id} = this.props;
    api.getCommentsByArticleId(article_id)
    .then(({comments}) => {
      this.setState({comments, isLoading: false})
    })

  }
}

export default CommentList;