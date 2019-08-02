import React from 'react';
import { Link } from "@reach/router";
import Voter from './Voter';
import '../styles/ArticleCard.css';
const timeago = require("timeago.js");

const ArticleCard = ({article}) => {
  const tsToDate = new Date(article.created_at)
  let timeToDisplay = timeago.format(tsToDate);  
  return (
    <div className="articleCard">
      
      <div className="articleCardVote">
      <Voter votes={article.votes} article_id={article.article_id}/>
      </div>

      <Link to={`../../articles/${article.article_id}`} style={{ textDecoration: 'none', color: '#000000' }}>
        <p className="articleTitle">{`${article.title}`}</p>
        <p className="articleAuthor"><span>by {`${article.author}`}</span></p>
        <p className="timeToDisplay"><span>🕑{timeToDisplay}</span>
        <span className="comments">Comments: {`${article.comment_count}`}</span></p>
      </Link>

    </div>
  );
};



export default ArticleCard;



