import React from 'react'
import PieChart from 'react-simple-pie-chart';
import {BarChart} from 'react-easy-chart';


const colors = ['green', 'blue', 'yellow', 'gold', 'dodgerblue', 'mediumslateblue', 'orange', 'red', 'purple','brown']
const Graph2 = ({ top10 }) => (
  <div>
    <PieChart
      slices={
        top10.map((el, i) => ({ color:colors[i], value: el.count }))
      }
    />
    <BarChart
      colorBars
      axes
      height={window.innerHeight * 0.6}
      width={window.innerWidth * 0.8}
      data={
        top10.map((el, i) => ({ x: el.word, y: el.count, color: colors[i] }))
      }
    />
  </div>
)

export default Graph2
