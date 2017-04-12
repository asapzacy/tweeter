import React from 'react'

const Tweets = ({ isEntered, text }) => (
  <h1>{isEntered && text}</h1>
)

export default Tweets
