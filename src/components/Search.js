import React from 'react'

const Search = ({ text, updateText }) => (
  <section className='searchContainer'>
    <div className='inputContainer'>
      <span className='icon'>{'@'}</span>
      <input className='search' onChange={updateText} value={text} type={'text'} spellCheck={false} placeholder={'jack'} />
      <span className='bar'></span>
    </div>
  </section>
)

export default Search
