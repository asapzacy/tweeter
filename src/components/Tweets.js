import React from 'react'
import Loading from './Loading'
import Error from './Error'
import Graph from './Graph'
import Info from './Info'

const Tweets = ({ isLoading, isError, tweets, user, twitterUser, tweetsCount, wordsCount }) => (
  <section className='tweetsContainer'>
    { isLoading && user
      ? <Loading />
      : isError
        ? <Error />
        : <Graph tweets={tweets} />
      }
    { tweets.length && !isError ? <Info twitterUser={twitterUser} tweetsCount={tweetsCount} wordsCount={wordsCount} /> : '' }
  </section>
)

export default Tweets
