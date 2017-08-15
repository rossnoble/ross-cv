import React, { Component } from 'react'
import data from '../data.json'

class App extends Component {
  render () {
    return (
      <div className="container">
        {data.name}!
      </div>
    )
  }
}

export default App
