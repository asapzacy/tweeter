import React from 'react'
import ArrowRight from 'react-icons/lib/io/ios-arrow-thin-right'

const Button = ({ makeRequest }) => (
  <div className='buttonContainer'>
    <button className='button' onClick={makeRequest}><ArrowRight /></button>
  </div>
)

export default Button
