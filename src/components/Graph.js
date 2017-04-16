import React from 'react'
import Bar from './Bar'

const Graph = ({ top10 }) => (
  <div className='graphContainer'>
    <svg className='svgg'>
      <g height="1000px">
        { top10.map((el, i) => <Bar x={`${(i * 10) + 0.5}%`} y={`calc(100% - ${el.count}%`} width={'9%'} height={`${el.count}%`} key={i} />) }
      </g>
    </svg>
  </div>
)

export default Graph
