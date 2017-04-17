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
      twitterUser: '',
      tweets: [],
      tweetsCount: 0,
      wordsCount: 0
    }
    this.updateUser = this.updateUser.bind(this)
    this.makeRequest = this.makeRequest.bind(this)
  }
  componentDidMount() {
    let user = this.props.params.user
    if (user) {
      this.setState({ user }, () => this.makeRequest())
    } else {
      this.setState({ user: '' })
    }
    this.init()
  }
  init() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 && this.state.user) {
        this.makeRequest()
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    let user = nextProps.params.user
    if (!user) {
      this.setState({ user: '', tweets: [] })
    }
  }
  updateUser(event) {
    this.setState({ user: event.target.value })
  }
  makeRequest() {
    if (!this.state.user) {
      return
    }
    this.setState({ isLoading: true })
    this.context.router.push('/' + this.state.user)
    getTweets(this.state.user)
      .then((data) => {
        data = this.sanitizeTweets(data)
        data = this.sortTweets(data)
        let count = this.countTweets(data)
        this.setState({
          isLoading: false,
          tweets: data,
          tweetsCount: count
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true
        })
      })
  }
  sanitizeTweets(tweets) {
    let twitterUser = tweets[0].user.screen_name
    this.setState({ twitterUser })
    const arr = tweets.reduce((arr, el) => {
      arr.push(el.text)
      return arr
    }, [])
    const hash = {}
    let wordsCount = 0
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
          wordsCount += 1
        }
      }
    }
    this.setState({ wordsCount })
    return hash
  }
  sortTweets(tweets) {
    const hashArr = Object.keys(tweets).map(el => ({ word: el, count: tweets[el] }))
    const topTweets = hashArr.sort((a, b) => b.count - a.count).slice(0,10).sort((a,b) => a.word === b.word ? 0 : a.word < b.word ? -1 : 1)
    return topTweets
  }
  countTweets(tweets) {
    return tweets.reduce((a, b) => a + b.count, 0)
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
