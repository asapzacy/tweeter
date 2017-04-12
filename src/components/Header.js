import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header className='headerContainer'>
    <Link to='/' className='headerLink'>{'tweeter'}</Link>
  </header>
)

export default Header
