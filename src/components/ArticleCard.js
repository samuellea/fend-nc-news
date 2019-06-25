import React from 'react';
import { Link } from "@reach/router";
import Voter from './Voter';

const ArticleCard = ({article}) => {
  return (
    <div>
        <p>_____________________________</p>
      <Voter votes={article.votes}/>
      <Link to={`../../articles/${article.article_id}`}>
        <p>{`${article.title}`}</p>
        <p style={{fontSize: 10}}><span>by {`${article.author}`}</span></p>
        <p style={{fontSize: 8}}><span>Posted: {`${article.created_at}`}</span><span>Comments: {`${article.comment_count}`}</span><span>Votes: {`${article.votes}`}</span></p>
      </Link>
    </div>
  );
};

export default ArticleCard;