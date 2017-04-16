import React from 'react'

const Input = ({ updateUser, user }) => (
  <div className='inputContainer'>
    <span className='icon'>{'@'}</span>
    <input className='search' onChange={updateUser} value={user} type='text' spellCheck={false} placeholder='jack' />
    <span className='bar'></span>
  </div>
)

export default Input
