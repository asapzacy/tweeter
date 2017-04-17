import React from 'react'
import Loading from './Loading'
import Graph from './Graph'

const Tweets = ({ isLoading, tweets, user }) => {
  return (
    <main>
      { isLoading && user
        ? <Loading />
        : <Graph tweets={tweets} />
      }
    </main>
  )
}

export default Tweets
