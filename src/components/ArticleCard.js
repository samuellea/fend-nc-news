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

      <div className="articleCardVoterContainer-outer">
        <div className="articleCardVoterContainer-inner">
        <Voter votes={article.votes} article_id={article.article_id} />
        </div>
      </div>

      <Link to={`../../articles/${article.article_id}`} style={{ textDecoration: 'none', color: '#000000', width: '100%' }}>

      <div className="articleCardInfoContainer">


      <div className="articleCardInfo">
          <div className="articleCardTitle">{`${article.title}`}</div>
          <div className="articleCardAuthor">by {`${article.author}`}</div>
          <div className="articleCardTime">🕑{timeToDisplay}</div>
      </div>

      </div>

          </Link>
      {/* 
        <div className="articleCardTitle">title</div>
        <div className="articleAuthor">author</div>
        <div className="timeToDisplay">date</div>
       */}
  
      {/* 
      </div>
      
      
      <p className="articleCardTitle">title</p>
      <p className="articleAuthor">author</p>
      
      <p className="articleCardTitle">{`${article.title}`}</p>
      <p className="articleAuthor"><span>by {`${article.author}`}</span></p>
      <p className="timeToDisplay"><span>🕑{timeToDisplay}</span>
      <span className="comments">Comments: {`${article.comment_count}`}</span></p>
    </Link> */}

    </div>
  );
};



export default ArticleCard;



