// #!/usr/bin/env node
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const fs = require('fs')
const Twitter = require('twitter')
const app = express()
const port = process.env.PORT || 9090

app.use(compression())
app.use(cors())

app.get('/api', (req, res) => {
  console.log(req.query)
  user = req.query.user
  const params = { screen_name: user, count: 3200, include_rts: false }
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
  // client.get('search/tweets', { q: user }, (error, tweets, response) => {
    console.log(tweets)
    res.end(JSON.stringify(tweets))
  })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const server = app.listen(9090, () => {
  console.log(`server listening on port ${9090}`)
  const host = server.address().address
  const port = server.address().port
})

const client = new Twitter({
  consumer_key: 'cfeVYkpN2F7Eyn1EAQVGAoMRN',
  consumer_secret: 'G5MUBQDBxXV1P947UiY5Nb1iMmLVVRmb58jAg4fxtiVgNeJISU',
  access_token_key: '296091989-OkBgzKKT6QUc9SgKiOawhFtupXUhdHg9is4ph8a7',
  access_token_secret: 'nzD0aTJxyxAKZry1118SLPTQkAciMuBpKnhG3TP69rlBB'
})

module.exports = app
