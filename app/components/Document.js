import React, { Component } from 'react'
import classNames from 'classnames'
import data from '../data.json'

class Document extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
  }

  componentDidMount () {
    document.body.addEventListener('click', this.handleBodyClick)
  }

  handleBodyClick (e) {
    if (this.state.selected) {
      this.setState({
        selected: false
      })

      console.log('update from body click', this.state.selected)
    }
  }

  handleClick (e) {
    if (!this.state.selected) {
      this.setState({
        selected: true
      })

      console.log('update from element click', this.state.selected)
    }
  }

  handleDoubleClick (e) {
    console.log('click double')

    alert('open vimulator!')
  }

  render () {
    const className = classNames('document', {
      'is-selected': this.state.selected
    })

    return (
      <div
        className={className}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        <div className="icon-wrapper">
          <div className="icon"></div>
        </div>
        <div className="filename">{data.filename}</div>
      </div>
    )
  }
}

export default Document
