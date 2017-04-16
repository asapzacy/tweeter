import React from 'react'
import Loading from './Loading'
import Graph from './Graph'

const Tweets = ({ isLoading, tweets }) => {
  return (
    <main>
      { isLoading
        ? <Loading />
        : <Graph tweets={tweets} />
      }
    </main>
  )
}

export default Tweets
