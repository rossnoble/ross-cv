import React, { Component } from 'react'
import classNames from 'classnames'
import data from 'app/data.json'
import css from './Button.scss'

class Button extends Component {

  getColorClass () {
    switch (this.props.color) {
      case 'green':
        return css.Button__green
      case 'orange':
        return css.Button__orange
      default:
        return css.Button__red
    }
  }

  render () {
    const {
      color,
      symbol,
      onClick,
    } = this.props

    console.log('props', this.props)

    const colorClass = this.getColorClass()

    const className = classNames({
      [`${css.Button}`]: true,
      [`${colorClass}`]: true,
    })

    return (
      <button
        className={className}
        onClick={onClick}
      >
        <span className={css.Symbol}>
          {this.props.children}
        </span>
      </button>
    )
  }
}

export default Button
