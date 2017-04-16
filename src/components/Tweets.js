import React from 'react'
import Graph from './Graph'
import Graph2 from './Graph2'

const Tweets = ({ tweets, isEntered, top10, sum }) => {
  top10.map((el, i) => console.log(el, i))
  return (
    <div style={{margin:'1.5em',height:'100%'}}>
      <Graph top10={top10} />
      <Graph2 top10={top10} />
      { top10.map((el, i) => <h1 key={i}>{`${i + 1}. ${el.word} - ${el.count} (${average(el.count, sum)}%)`}</h1>) }
    </div>
  )
}

export default Tweets

const average = (count, total) => {
  return ((count / total) * 100).toFixed(2)
}
