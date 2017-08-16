import React, { Component } from 'react'
import classNames from 'classnames'
import data from 'app/data.json'
import css from './Document.scss'

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

    alert('open terminal!')
  }

  render () {
    const className = classNames({
      [`${css.Document}`]: true,
      [`${css.Document__isSelected}`]: this.state.selected
    })

    return (
      <div
        className={className}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        <div className={css.IconWrapper}>
          <div className={css.Icon}></div>
        </div>
        <div className={css.Filename}>{data.filename}</div>
      </div>
    )
  }
}

export default Document
