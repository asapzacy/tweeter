import React, { Component } from 'react'
import Stream from '../components/Stream'
import { getCompanies } from '../helpers/api'

class StreamContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      companies: []
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    const id = this.props.routeParams.id || null
    getCompanies(id)
      .then((data) => {
        this.setState({
          isLoading: false,
          companies: data
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true
        })
      })
  }
  render() {
    return <Stream {...this.state} />
  }
}

export default StreamContainer
