import React, { Component } from 'react'
import data from '../data.json'
import Document from './Document'

// Background images
import mountHood from '../images/mount-hood.jpg';
import mountJefferson from '../images/mount-jefferson.jpg';
import southOregon from '../images/south-oregon.jpg';

const backgrounds = [
  // mountHood,
  // mountJefferson,
  southOregon,
];

class App extends Component {

  getBackground () {
    const max = backgrounds.length;
    const index = Math.floor(Math.random() * max);
    const image = backgrounds[index];

    return `url('${image}')`;
  }

  render () {
    const style = { backgroundImage: this.getBackground() }

    return (
      <div className="container" style={style}>
        <Document />
      </div>
    )
  }
}

export default App
