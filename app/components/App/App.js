import React, { Component } from 'react'
import Document from 'components/Document/Document'
import Terminal from 'components/Terminal/Terminal'
import Vim from 'components/Vim/Vim'
import data from 'app/data.json'
import css from './App.scss'

// Background images
import mountHood from 'images/mount-hood.jpg';
import mountJefferson from 'images/mount-jefferson.jpg';
import southOregon from 'images/south-oregon.jpg';
import yosemite from 'images/yosemite.jpg';

const backgrounds = [
  mountHood,
  // mountJefferson,
  // southOregon,
  // yosemite,
];

class App extends Component {

  getBackground () {
    const max = backgrounds.length;
    const index = Math.floor(Math.random() * max);
    const image = backgrounds[index];

    return `url(${image})`;
  }

  render () {
    const style = { backgroundImage: this.getBackground() }

    return (
      <div className={css.App} style={style}>
        <Document />
        <Terminal>
          <Vim />
        </Terminal>
      </div>
    )
  }
}

export default App
