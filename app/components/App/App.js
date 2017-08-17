import React, { Component } from 'react'
import Document from 'components/Document/Document'
import Terminal from 'components/Terminal/Terminal'
import Vim from 'components/Vim/Vim'
import data from 'app/data.json'
import css from './App.scss'

// Background images
import imgMountHood from 'images/mount-hood.jpg';
import imgMountJefferson from 'images/mount-jefferson.jpg';
import imgSouthOregon from 'images/south-oregon.jpg';
import imgYosemite from 'images/yosemite.jpg';

const backgrounds = [
  imgMountHood,
  imgMountJefferson,
  imgSouthOregon,
  imgYosemite,
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
      </div>
    )
  }
}

export default App
