import React, { Component } from 'react'
import Rnd from 'react-rnd'
import classNames from 'classnames'
import Button from './Button/Button'
import data from 'app/data.json'
import css from './Terminal.scss'

class Terminal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullscreen: false,
    }

    this.closeWindow = this.closeWindow.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
  }

  closeWindow (e) {
    // Reset fullscreen state
    this.setState({ fullscreen: false })
    this.props.onClose(e)
  }

  toggleFullscreen (e) {
    this.setState({
      fullscreen: !this.state.fullscreen,
    })
  }

  render () {
    const { fullscreen } = this.state
    const { visible } = this.props

    const {
      resizeConfig,
      width,
      height,
      minWidth,
      minHeight,
      resizeGrid,
    } = this.props

    const rndConfig = {
      x: (window.innerWidth / 2) - (width / 2),
      y: (window.innerHeight / 2) - (height / 2) - 20,
      width,
      height
    }

    // Hidden state on close/minimize
    if (!visible) return <div />

    const body = (
      <div>
        <div className={css.Header}>
          <div className={css.Buttons}>
            <Button color="red" onClick={this.closeWindow}>×</Button>
            <Button color="orange" onClick={this.closeWindow}>‐</Button>
            <Button color="green" onClick={this.toggleFullscreen}>+</Button>
          </div>
          <span className={css.Title}>1. vim</span>
        </div>
        <div className={css.Body}>
          {this.props.children}
        </div>
      </div>
    )

    // Fullscreen without drag and resize
    if (fullscreen) {
      return (
        <div className={`${css.Terminal} ${css.Terminal__isFullscreen}`}>
          {body}
        </div>
      )
    }

    // Normal state with drag and resize
    return (
      <Rnd default={rndConfig}
        className={css.Terminal}
        enableResizing={resizeConfig}
        minWidth={minWidth}
        minHeight={minHeight}
        resizeGrid={resizeGrid}
        bounds="parent"
        dragHandlerClassName={`.${css.Header}`}
      >
        {body}
      </Rnd>
    )
  }
}

Terminal.defaultProps = {
  width: 700,
  height: 550,
  minWidth: 200,
  minHeight: 160,
  resizeGrid: [15, 15],
  resizeConfig: {
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    left: true,
    right: true,
    top: true,
    topLeft: true,
    topRight: true
  }
}

export default Terminal
