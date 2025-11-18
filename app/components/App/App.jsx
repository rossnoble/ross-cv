import React, { Component } from 'react'
import Document from 'components/Document/Document'
import Terminal from 'components/Terminal/Terminal'
import Vim from 'components/Vim/Vim'
import Link from 'components/shared/Link/Link'
import data from 'app/data.json'
import css from './App.module.scss'

// Background images
import imgMountHood from 'images/mount-hood.jpg';
import imgMountJefferson from 'images/mount-jefferson.jpg';
import imgOregon from 'images/south-oregon.jpg';
import imgTongariro from 'images/tongariro.jpg';

const backgrounds = [
  imgMountHood,
  imgMountJefferson,
  imgOregon,
  imgTongariro,
];

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showTerminal: true,
      background: '',
    }

    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    this.setState({
      background: this.getBackground()
    })
  }

  getBackground () {
    const max = backgrounds.length;
    const index = Math.floor(Math.random() * max);
    const image = backgrounds[index];

    return `url(${image})`;
  }

  handleClose (e) {
    this.setState({ showTerminal: false })
  }

  handleDoubleClick (e) {
    this.setState({ showTerminal: true })
  }

  render () {
    const style = { backgroundImage: this.state.background }

    return (
      <div className={css.App} style={style}>
        <Document
          onDoubleClick={this.handleDoubleClick}
        />

        <Terminal
          visible={this.state.showTerminal}
          onClose={this.handleClose}
        >
          <Vim />
        </Terminal>

        <Link
          href={data.links.source}
          className={css.SourceLink}
        >
          View on Github
        </Link>
      </div>
    )
  }
}

export default App
