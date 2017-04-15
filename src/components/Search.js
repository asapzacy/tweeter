import React from 'react'

const Search = ({ text, updateText, updateFocus }) => (
  <section className='searchContainer'>
    <div className='inputContainer'>
      <span className='icon'>{'@'}</span>
      <input className='search' onChange={updateText} onFocus={updateFocus} value={text} type='text' placeholder='jack' />
      <span className='bar'></span>
    </div>
  </section>
)

export default Search
