// #!/usr/bin/env node
const express = require('express')
const Twitter = require('twitter')
const compression = require('compression')
const cors = require('cors')
// const fs = require('fs')
const app = express()
const port = process.env.PORT || 9090

app.use(compression())
app.use(cors())

const client = new Twitter({
  consumer_key: 'cfeVYkpN2F7Eyn1EAQVGAoMRN',
  consumer_secret: 'G5MUBQDBxXV1P947UiY5Nb1iMmLVVRmb58jAg4fxtiVgNeJISU',
  access_token_key: '296091989-OkBgzKKT6QUc9SgKiOawhFtupXUhdHg9is4ph8a7',
  access_token_secret: 'nzD0aTJxyxAKZry1118SLPTQkAciMuBpKnhG3TP69rlBB'
})


app.get('/api', (req, res) => {
  const params = { screen_name: req.query.user, count: 3200, include_rts: false }
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    res.end(JSON.stringify(tweets))
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})

module.exports = app
