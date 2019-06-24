import axios from 'axios';

const request = axios.create({baseURL: 'https://bend-nc-news.herokuapp.com/api/'})

export const getTopics = (topic, author) => {
  return request.get('/topics').then(({data}) => {
    console.log(data.topics)
    return data.topics;
  })
}

export const getArticles = (topic, author) => {
  return request.get('/articles', {params: {
    topic: topic
  }}).then(({data}) => {
    return data.articles;
  })
}