import React, { Component } from 'react'
import data from '../data.json'

class Terminal extends Component {
  render () {
    return (
      <div
        className="terminal"
      >
        <div className="terminal-header">
          <div className="buttons">
            <a href="#" className="red js-close">&nbsp;</a>
            <a href="#" className="orange js-minimize">&nbsp;</a>
            <a href="#" className="green js-fullscreen">&nbsp;</a>
          </div>
          <span className="title">1. vim</span>
        </div>

        <div className="terminal-body">
          hello
        </div>
      </div>
    )
  }
}

export default Terminal
