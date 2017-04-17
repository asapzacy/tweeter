import React from 'react'

const Button = ({ makeRequest }) => (
  <div className='buttonContainer'>
    <button className='button' onClick={makeRequest}>{'GO'}</button>
  </div>
)

export default Button
