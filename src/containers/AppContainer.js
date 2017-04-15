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
      isFocused: false,
      isLoading: true,
      isError: false,
      text: '',
      tweets: [],
      top10: [],
      sum: 0
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
        this.setState({
          isLoading: false,
          tweets
        }, () => this.test())
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true
        })
      })
  }
  test() {
    const arr = this.state.tweets.reduce((arr, el) => {
      arr.push(el.text)
      return arr
    }, [])
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
      const tweet = arr[i].split(' ')
      for (let j = 0; j < tweet.length; j++) {
        let word = tweet[j]
        if (word.includes('http') || word.includes('@') || word.includes('#')) {
          word = ''
        }
        word = word.replace(/[^a-zA-Z-']+/g,'')
        if (word === 'amp') {
          word = '&'
        }
        if (word) {
          hash[word] = (hash[word] || 0) + 1
        }
      }
    }
    const result = Object.keys(hash).map(el => ({ word: el, count: hash[el] }))
    const x = result.sort((a, b) => b.count - a.count).slice(0,10)
    const sum = x.reduce((a, b) => a + b.count, 0)
    this.setState({
      top10: x,
      sum
     })
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          <Search {...this.state} updateText={this.updateText} updateFocus={this.updateFocus} />
          <Tweets {...this.state} />
        </main>
      </div>
    )
  }
}

export default AppContainer
