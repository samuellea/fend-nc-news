import React, { Component } from 'react';
import * as api from './api';
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: []
  }
  render() {
    const {topics} = this.state
    return (
    <section className='navBar'>
      {topics.map((topic, i)=>(
        <Link to={`/topics/${topic.slug}`} className={`topic_${i}`}key={i} >
        <span >{topic.slug}  </span>
        </Link>
      )
      )}    

    </section>
    );
  }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({
        topics: topics
      })
    })
  }
}

export default NavBar;