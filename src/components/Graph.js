import React from 'react'
import { BarChart } from 'react-easy-chart'

const Graph = ({ tweets }) => (
  <section className='graphContainer'>
    <BarChart
      colorBars
      axes
      height={window.innerHeight * 0.5}
      width={window.innerWidth * 0.75}
      data={tweets.map((el, i) => ({ x: el.word, y: el.count }))}
    />
  </section>
)

export default Graph
