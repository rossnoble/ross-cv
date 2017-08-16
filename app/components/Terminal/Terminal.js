import React, { Component } from 'react'
import data from 'app/data.json'
import css from './Terminal.scss'

class Terminal extends Component {
  render () {
    return (
      <div className={css.Terminal}>
        <div className={css.Header}>
          <div className={css.Buttons}>
            <a href="#" className="red js-close">&nbsp;</a>
            <a href="#" className="orange js-minimize">&nbsp;</a>
            <a href="#" className="green js-fullscreen">&nbsp;</a>
          </div>
          <span className={css.Title}>1. vim</span>
        </div>

        <div className="terminal-body">
          hello
        </div>
      </div>
    )
  }
}

export default Terminal
