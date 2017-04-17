import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import AppContainer from '../containers/AppContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path=':user' component={AppContainer} />
    </Route>
  </Router>
)

export default routes
