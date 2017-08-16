import React, { Component } from 'react'
import Document from 'comps/Document/Document'
import Terminal from 'comps/Terminal/Terminal'
import data from 'app/data.json'
import css from './App.scss'

// Background images
import mountHood from 'images/mount-hood.jpg';
import mountJefferson from 'images/mount-jefferson.jpg';
import southOregon from 'images/south-oregon.jpg';

const backgrounds = [
  mountHood,
  // mountJefferson,
  // southOregon,
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
        <Terminal />
      </div>
    )
  }
}

export default App
