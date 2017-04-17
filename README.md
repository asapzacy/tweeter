# tweeter

![tweeter preview](https://zac.codes/img/other/tweeter_preview.png)

A coding challenge to interact with the Twiiter API. The user inputs a Twitter username, the app fetches all of the users' tweets, and outputs a graph showing the most common used words.

## Usage
```
git clone https://github.com/zacarellano/tweeter.git
cd tweeter
yarn                # npm install
yarn start          # npm run start
```

then --> [localhost:3000](http://localhost:3000)

## Overview

This is what happens on initial page load..

1. `<AppContainer />` checks `this.props.params.user` (url) to see if a user is already included in the url. It also sets up a global `window.addEventListener` on the `keydown` event. Anytime `event.keyCode === 13` (enter) is pressed, the `makeRequest()` function is fired.

2. The `<Search />` component includes children `<Input />` and `<Button />` components. When a user searches / looks-up a Twitter user_name, the `makeRequest()` function is fired.

3. `makeRequest()` is the main function of the whole project. It uses the `axios` promise-based HTTP client to fetch - `http://localhost:9090/${user}` - which will return an array of tweets from the Twitter API.
    - If the `server.js` file returns an error and no array of tweets, `this.state.isError` is set to `true` and the `<Error />` component is rendered.
    - Also, while `makeRequest()` and all the parsing of data is happening, `this.state.isLoading` is set to `true` and renders a `<Loading />` component.


4. Once I have all the data / tweets, I can now parse it / make usable. I start with `sanitizeTweets()` which does some basic `RegExp` and clears out mentions (`@`), hashtags (`#`), numbers (`2`), URLS (`str.startsWith('http')`), and splits the original tweets array into a 2D array of sanitized words tweet-by-tweet. This function then returns a hash table / object containing all the sanitized words as the key and the word count as the value (i.e. `{'the': 23}`)

5. From here, I create a `sortTweets()` function which takes this tweets object (hash table) and creates a new array of objects (i.e. `[{word: 'the', count: 23}]`), sorts them by count size (high --> low), slices the 10 most-common words, and then sorts it again in alphabetical order and returns this array of top-10 tweets.

6. This top-10 array of tweets is passed to a `<Tweets />` component which passes along the props to its' `<Graph />` and `<Info />` children. The `<Graph />` component maps over `tweets` array and uses the `react-easy-chart` package to create the bar graph. The `<Info />` component takes in the `user`, `tweetsCount`, and `wordsCount` - which displays a quick summary sentence and a `<Link />` to the users' Twitter account at the bottom.

## Packages

### frontend -

- [create-react-app](https://github.com/facebookincubator/create-react-app) - this project was bootstrapped using Facebook's create-react-app

- [react-router](https://github.com/ReactTraining/react-router) - declarative routing for React.js

- [axios](https://github.com/mzabriskie/axios) - promise-based HTTP client for the browser + node.js

- [react-easy-chart](https://github.com/rma-consulting/react-easy-chart) - very quick and easy graphing components for React.js (uses D3.js)

- [react-icons](https://github.com/gorangajic/react-icons) - for using ionic icons

### backend -

- [express](https://expressjs.com/) - node.js web application framework

- [twitter](https://github.com/desmondmorris/node-twitter) - Twitter API client library for node.js

- [cors](https://github.com/expressjs/cors) - Node.js CORS middleware

- [compression](https://github.com/expressjs/compression) - Node.js compression middleware

## Going Forward

A few things I would've done differently or features I'd like to add.

- Right now, no one really cares how many times `@jack` or `@realdonaldtrump` says the word 'the', so I would've liked to add an option that excludes common words. But then I ran into the issue of where do I draw this line between too-common and common (i.e. check this [wikipedia article (most-common-words)](https://en.wikipedia.org/wiki/Most_common_words_in_English) - is 'would' too common to include?)

- I would've liked to add another option to include hashtags. The default / right now is set to exclude all mentions, hashtags, numbers, URLs, and so on.

- For some reason (I didn't look into this too much), but requesting all the tweets from `@jack` will only return an array of 180 tweets, when the max limit should be 3,200 tweets from the Twitter API - again, didn't look into this too much.
