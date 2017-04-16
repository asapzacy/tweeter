import React from 'react'

const Bar = ({ x, y, width, height, fill = '#e0e0e0' }) => (
  <rect className='s' x={x} y={y} width={width} height={height} fill={fill} />
)
export default Bar
