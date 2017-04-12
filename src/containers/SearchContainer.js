import React, { Component } from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }
  updateText(event) {
    this.setState({ text: event.target.value })
  }
  render() {
    return <Search {...this.state} updateText={this.updateText} />
  }
}

export default SearchContainer
