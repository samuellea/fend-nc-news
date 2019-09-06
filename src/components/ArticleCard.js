import React from 'react';
import { Link } from "@reach/router";
import Voter from './Voter';
import '../styles/ArticleCard.css';
const timeago = require("timeago.js");

const ArticleCard = ({ article, index }) => {
  const tsToDate = new Date(article.created_at)
  let timeToDisplay = timeago.format(tsToDate);
  let fadeDelay = 150 * (index + 1)
  return (
    <div className="articleCard" style={{ animation: `articleCardFade ${fadeDelay}ms ease-in-out 0s both` }}>

      <div className="articleCardVoterContainer-outer">
        <div className="articleCardVoterContainer-inner">
          <Voter votes={article.votes} article_id={article.article_id} voterType='smallVoter' />
        </div>
      </div>

      <Link to={`../../articles/${article.article_id}`} style={{ textDecoration: 'none', color: '#000000', width: '100%' }}>
        <div className="articleCardInfoContainer">
          <div className="articleCardInfo">
            <div className="articleCardTitle">{`${article.title}`}</div>
            <div className="articleCardAuthor">by {`${article.author}`} </div>
            <div className="articleCardTime"><span><i className="far fa-clock fa-xs" ></i></span> {timeToDisplay}
              <span className="articleCardCommentCount"><span> <i class="far fa-comment-alt fa-xs"></i></span> <span className="articleCardCommentCount-number">{article.comment_count}</span> comments</span>
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
};



export default ArticleCard;



