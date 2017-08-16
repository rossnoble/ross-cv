import React, { Component } from 'react'
import Button from './Button/Button'
import Vim from './Vim/Vim'
import data from 'app/data.json'
import css from './Terminal.scss'

class Terminal extends Component {
  close (e) {
    console.log('close')
  }

  minimize (e) {
    console.log('minimize')
  }

  fullscreen (e) {
    console.log('fullscreen')
  }

  render () {
    return (
      <div className={css.Terminal}>
        <div className={css.Header}>
          <div className={css.Buttons}>
            <Button color="red" onClick={this.close}>×</Button>
            <Button color="orange" onClick={this.minimize}>‐</Button>
            <Button color="green" onClick={this.fullscreen}>+</Button>
          </div>
          <span className={css.Title}>1. vim</span>
        </div>

        <div className={css.Body}>
          <Vim />
        </div>
      </div>
    )
  }
}

export default Terminal
