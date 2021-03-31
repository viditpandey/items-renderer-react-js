import React from 'react'
import Home from './components/Home'
var ReactDOM = require('react-dom')
require('./index.css')

class App extends React.Component {
  render () {
    return ( <div><Home /></div> )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('app')
)
