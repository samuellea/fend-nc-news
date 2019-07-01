import React from 'react';
import { Link } from "@reach/router";
import Voter from './Voter';
const timeago = require("timeago.js");

const ArticleCard = ({article}) => {
  const tsToDate = new Date(article.created_at)
  let toDisplay = timeago.format(tsToDate);  
  return (
    <div style={{borderStyle: 'dotted', borderColor: 'lightgray', borderWidth: '2px', marginTop: '10px', backgroundColor: '#fcfcfc', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
      <div className="articleCardVote">
      <Voter votes={article.votes} article_id={article.article_id}/>
      </div>
      <Link to={`../../articles/${article.article_id}`} style={{ textDecoration: 'none', color: '#000000' }}>
        <p style={{fontSize: '150%', margin: '0%'}}>{`${article.title}`}</p>
        <p style={{fontSize: '100%'}}><span>by {`${article.author}`}</span></p>
        <p style={{fontSize: '80%'}}><span>🕑{toDisplay}</span>
        <span style={{paddingLeft: '1.5%'}}>Comments: {`${article.comment_count}`}</span></p>
      </Link>
    </div>
  );
};



export default ArticleCard;



