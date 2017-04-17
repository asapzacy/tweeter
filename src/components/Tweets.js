import React from 'react'
import Loading from './Loading'
import Graph from './Graph'
import Info from './Info'

const Tweets = ({ isLoading, tweets, user, twitterUser, tweetsCount, wordsCount }) => (
  <main>
    { (isLoading && user) ? <Loading /> : <Graph tweets={tweets} /> }
    { tweets.length ? <Info twitterUser={twitterUser} tweetsCount={tweetsCount} wordsCount={wordsCount} /> : '' }
  </main>
)

export default Tweets
