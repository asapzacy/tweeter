import React from 'react'
import Loading from './Loading'
import Company from './Company'

const Stream = ({ isLoading, companies }) => (
  <section className='streamContainer'>
    <header className='streamHeader'>
      <h1 className='streamTitle'>{'Companies'}</h1>
    </header>
    <ul className='companiesList'>
      { isLoading
        ? <Loading />
        : companies.map(item => <Company {...item} key={item._id} />)
      }
    </ul>
  </section>
)

export default Stream
