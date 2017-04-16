import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'

const NotFoundContainer = () => <div className='notFoundContainer'>{'404'}</div>

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='/:user' component={AppContainer} />
      <Route path='*' component={NotFoundContainer} />
    </Route>
  </Router>
)

export default routes
