import React, { Component } from 'react'
import { Rnd } from 'react-rnd'
import classNames from 'classnames'
import data from 'app/data.json'
import css from './Document.module.scss'

class Document extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick)
  }

  handleBodyClick(e) {
    if (this.state.selected) {
      this.setState({
        selected: false,
      })
    }
  }

  handleClick(e) {
    e.stopPropagation()
    if (!this.state.selected) {
      this.setState({
        selected: true,
      })
    }
  }

  render() {
    const { onDoubleClick } = this.props

    const className = classNames({
      [`${css.Document}`]: true,
      [`${css.Document__isSelected}`]: this.state.selected,
    })

    return (
      <Rnd
        default={{ x: 30, y: 56 }}
        className={className}
        bounds="parent"
        onClick={this.handleClick}
        onDoubleClick={onDoubleClick}
      >
        <div className={css.IconWrapper}>
          <div className={css.Icon}></div>
        </div>
        <div className={css.Filename}>{data.filename}</div>
      </Rnd>
    )
  }
}

export default Document
