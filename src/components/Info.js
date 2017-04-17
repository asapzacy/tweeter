import React from 'react'
import { Link } from 'react-router'

const Info = ({ user, tweetsCount, wordsCount }) => (
  <section className='infoContainer'>
    <p>{`Counting `}
      <strong>{tweetsCount.toLocaleString()}</strong>
      {` tweets / `}
      <strong>{wordsCount.toLocaleString()}</strong>
      {' words from '}
      <Link to={`https://twitter.com/${user}`}>{`@${user}`}</Link>
      {'.'}
    </p>
  </section>
)

export default Info
