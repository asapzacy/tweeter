import React from 'react'
import { render } from 'react-dom'
import AppContainer from '../containers/AppContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<AppContainer />, div)
})
