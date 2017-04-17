import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppContainer from '../containers/AppContainer'
import TweetsContainer from '../containers/TweetsContainer'

const NotFoundContainer = () => <div className='notFoundContainer'>{'404'}</div>

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='/:user' component={TweetsContainer} />
      <Route path='*' component={NotFoundContainer} />
    </Route>
  </Router>
)

export default routes
