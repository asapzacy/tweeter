import Twitter from 'twitter'


const client = new Twitter({
  consumer_key: 'cfeVYkpN2F7Eyn1EAQVGAoMRN',
  consumer_secret: 'G5MUBQDBxXV1P947UiY5Nb1iMmLVVRmb58jAg4fxtiVgNeJISU',
  access_token_key: '296091989-OkBgzKKT6QUc9SgKiOawhFtupXUhdHg9is4ph8a7',
  access_token_secret: 'nzD0aTJxyxAKZry1118SLPTQkAciMuBpKnhG3TP69rlBB',
  request_options: {
    proxy: 'https://zac.codes'
  }
})

const params = { screen_name: 'asapzacy' }
client.get('/statuses/user_timeline', params, (error, tweets, response) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tweets)
  }
})

export const getTweets = (user) => {
  client.get('/status/user_timeline', params, (error, tweets, response) => {
    return tweets
  })
}
