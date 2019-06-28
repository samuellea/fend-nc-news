import React from 'react';
import { Link } from "@reach/router";
import Voter from './Voter';

const ArticleCard = ({article}) => {
  return (
    <div>
        <p>_____________________________</p>
      <Voter votes={article.votes} article_id={article.article_id}/>
      <Link to={`../../articles/${article.article_id}`} style={{ textDecoration: 'none', color: '#000000' }}>
        <p>{`${article.title}`}</p>
        <p style={{fontSize: '100%'}}><span>by {`${article.author}`}</span></p>
        <p style={{fontSize: '80%'}}><span>🕑{`${article.created_at}`}</span><span style={{paddingLeft: '1.5%'}}>Comments: {`${article.comment_count}`}</span></p>
      </Link>
    </div>
  );
};

export default ArticleCard;