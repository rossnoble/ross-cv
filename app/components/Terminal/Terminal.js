import React, { Component } from 'react'
import classNames from 'classnames'
import Button from './Button/Button'
import Vim from './Vim/Vim'
import data from 'app/data.json'
import css from './Terminal.scss'

class Terminal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullscreen: false,
      visible: true,
    }

    this.closeWindow = this.closeWindow.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
  }

  closeWindow (e) {
    this.setState({
      visible: !this.state.visible,
    })
  }

  toggleFullscreen (e) {
    this.setState({
      fullscreen: !this.state.fullscreen,
    })
  }

  render () {
    const className = classNames(
      [`${css.Terminal}`],
      { [`${css.Terminal__isFullscreen}`]: this.state.fullscreen },
      { [`${css.Terminal__isVisible}`]: this.state.visible }
    )

    return (
      <div className={className}>
        <div className={css.Header}>
          <div className={css.Buttons}>
            <Button color="red" onClick={this.closeWindow}>×</Button>
            <Button color="orange" onClick={this.closeWindow}>‐</Button>
            <Button color="green" onClick={this.toggleFullscreen}>+</Button>
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
