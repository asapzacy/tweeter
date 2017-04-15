import axios from 'axios'

export const getTweets = (id) => {
  const url = `http://localhost:9090/api?user=${id}`
  return axios.get(url)
    .then(tweets => tweets.data)
    .catch(error => error.status)
}
