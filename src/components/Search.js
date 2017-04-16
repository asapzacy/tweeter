import React from 'react'
import Input from './Input'
import Button from './Button'

const Search = ({ updateUser, user, makeRequest }) => (
  <section className='searchContainer'>
    <Input updateUser={updateUser} user={user} />
    <Button makeRequest={makeRequest} />
  </section>
)

export default Search
