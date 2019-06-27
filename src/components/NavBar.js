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
    <section>
      {topics.map((topic, i)=>(
        <Link to={`/topics/${topic.slug}`} key={i} >
        <span>{topic.slug}  </span>
        </Link>
      )
      )}    
    </section>
    );
  }

  componentDidMount() {
    console.log('NavBar componentDidMount...')
    api.getTopics().then(topics => {
      this.setState({
        topics: topics
      })
    })
  }
}

export default NavBar;