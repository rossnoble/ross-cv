import React, { Component } from 'react'
import data from '../data.json'
import Document from './Document'

class App extends Component {
  render () {
    return (
      <div className="container">
        <Document />
      </div>
    )
  }
}

export default App
