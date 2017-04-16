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
      isLoading: false,
      isError: false,
      user: '',
      tweets: [],
      tweetsCount: 0
    }
    this.updateUser = this.updateUser.bind(this)
    this.makeRequest = this.makeRequest.bind(this)
  }
  componentDidMount() {
    const user = this.props.params.user
    if (user) {
      this.setState({ user }, () => this.makeRequest())
    }
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 && this.state.user) {
        this.makeRequest()
      }
    })
  }
  updateUser(event) {
    this.setState({ user: event.target.value })
  }
  makeRequest() {
    this.setState({ isLoading: true })
    console.log(this)
    this.context.router.push('/' + this.state.user)
    getTweets(this.state.user)
      .then((data) => {
        data = this.sanitizeData(data)
        this.setState({
          isLoading: false,
          tweets: data
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true
        })
      })
  }
  sanitizeData(tweets) {
    const arr = tweets.reduce((arr, el) => {
      arr.push(el.text)
      return arr
    }, [])
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
      const tweet = arr[i].split(' ')
      for (let j = 0; j < tweet.length; j++) {
        let word = tweet[j].toLowerCase()
        if (word.includes('http') || word.includes('@') || word.includes('#') || word === '-') {
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
    const x = result.sort((a, b) => b.count - a.count).slice(0,10).sort((a,b) => a.word === b.word ? 0 : a.word < b.word ? -1 : 1)
    const sum = x.reduce((a, b) => a + b.count, 0)
    console.log(x)
    return x
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          <Search {...this.state} updateUser={this.updateUser} makeRequest={this.makeRequest} />
          <Tweets {...this.state} />
        </main>
      </div>
    )
  }
}

export default AppContainer

AppContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
