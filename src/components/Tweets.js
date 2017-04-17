import React from 'react'
import Loading from './Loading'
import Graph from './Graph'
import Info from './Info'

const Tweets = ({ isLoading, tweets, user, tweetsCount, wordsCount }) => (
  <main>
    { (isLoading && user) ? <Loading /> : <Graph tweets={tweets} /> }
    { (tweets.length && !isLoading) ? <Info user={user} tweetsCount={tweetsCount} wordsCount={wordsCount} /> : '' }
  </main>
)

export default Tweets
