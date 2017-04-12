import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Tweets from '../components/Tweets'
import { getTweets } from '../helpers/api'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      isEntered: false,
      isLoading: true,
      isError: false,
      text: '',
      tweets: []
    }
    this.updateText = this.updateText.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this.setState({ isEntered: this.state.text && !this.state.isEntered }, () => {
          this.makeRequest()
        })
      }
    })
  }
  updateText(event) {
    this.setState({ text: event.target.value })
  }
  makeRequest() {
    getTweets(this.state.text)
      .then((tweets) => {
        this.setState({ isLoading: false, tweets })
      })
      .catch((error) => {
        this.setState({ isLoading: false, isError: true })
      })

  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          {/* { this.props.children } */}
          <Search {...this.state} updateText={this.updateText} />
          <Tweets {...this.state} />
        </main>
      </div>
    )
  }
}

export default AppContainer
