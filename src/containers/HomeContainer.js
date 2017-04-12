import React, { Component } from 'react'
import Loading from '../components/Loading'
import Search from '../components/Search'
import SearchContainer from './SearchContainer'
import { getCompany } from '../helpers/api'

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }
  componentDidMount() {
  }
  updateText(event) {
    this.setState({ text: event.target.value })
  }
  render() {
    return <Search {...this.state} updateText={this.updateText} />
  }
}

export default HomeContainer
