import React from 'react'

const Tweets = ({ tweets, isEntered }) => {
  console.log(tweets)
  return (
    <h1>{(isEntered && tweets !== undefined) && tweets.map((el, i) => <div style={{margin:'1em'}} key={i}>{el.text}</div>)}</h1>

  )
}

export default Tweets
