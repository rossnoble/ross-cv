import React, { Component } from 'react'

import Document from '../Document/Document'
import Terminal from '../Terminal/Terminal'
import Vim from '../Vim/Vim'
import Link from '../shared/Link/Link'
import data from '../../data.json'
import css from './App.module.scss'

// Background images
import imgMountHood from 'images/mount-hood.jpg'
import imgMountJefferson from 'images/mount-jefferson.jpg'
import imgOregon from 'images/south-oregon.jpg'
import imgTongariro from 'images/tongariro.jpg'

const backgrounds = [imgMountHood, imgMountJefferson, imgOregon, imgTongariro]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTerminal: true,
      background: '',
    }

    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChangeBackground = this.handleChangeBackground.bind(this)
  }

  componentDidMount() {
    this.setState({
      background: this.getBackground(),
    })
  }

  getBackground() {
    const max = backgrounds.length
    const index = Math.floor(Math.random() * max)
    const image = backgrounds[index]

    if (this.state.background === image) {
      return this.getBackground()
    }

    return image
  }

  handleClose() {
    this.setState({ showTerminal: false })
  }

  handleDoubleClick() {
    this.setState({ showTerminal: true })
  }

  handleChangeBackground() {
    this.setState({
      background: this.getBackground(),
    })
  }

  render() {
    const style = { backgroundImage: `url(${this.state.background})` }

    return (
      <div className={css.App} style={style}>
        <div className={css.Banner}>
          This project is no longer being updated. Check out my blog:{' '}
          <a href="https://rossnoble.net" target="_blank">
            rossnoble.net
          </a>
        </div>
        <Document onDoubleClick={this.handleDoubleClick} />

        <Terminal visible={this.state.showTerminal} onClose={this.handleClose}>
          <Vim />
        </Terminal>

        <Link href={data.links.source} className={css.SourceLink}>
          View on Github
        </Link>

        <button className={css.BackgroundButton} onClick={this.handleChangeBackground}>
          Change background
        </button>
      </div>
    )
  }
}

export default App
