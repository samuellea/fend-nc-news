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
        <Link to={`/topics/${topic.slug}`} key={i} style={{ textDecoration: 'none', color: '#000000', letterSpacing: '5px', fontWeight: 'bold' }} >
        <span className={`topic_${i}`} style={{fontSize: '150%'}}>{topic.slug}  </span>
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

  componentDidUpdate() {
    console.log('NAVBAR COMPONENTDIDUPDATE...')
  }
}

export default NavBar;