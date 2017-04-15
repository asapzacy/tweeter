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
      tweets: []
    }
    this.updateText = this.updateText.bind(this)
    this.updateFocus = this.updateFocus.bind(this)
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
  updateFocus(event) {
    console.log(event)
    this.setState({ isFocused: true })
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
        // word = word.split('.').join('')
        // word = word.split('\"').join('')
        // word = word.split('\'').join('')
        // word = word.split(')').join('')
        // word = word.split('(').join('')
        // word = word.split(',').join('')
        // word.replace(/[^\w\s!?]/g,'');
        if (word.includes('http') || word.includes('@') || word.includes('#')) {
          word = ''
        }
        word = word.replace(/[^a-zA-Z-']+/g, '')


        if (word) {
          hash[word] = (hash[word] || 0) + 1
        }
      }
    }
    const result = Object.keys(hash).map(el => ({ word: el, count: hash[el] }))
    const x = result.sort((a, b) => b.count - a.count).slice(0,10)
    console.log(x)
    // for (let item in hash) {
    //   result.push({ item: hash[item] })
    // }
    // console.log(result)
    console.log(hash)
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
