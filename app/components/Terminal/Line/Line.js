import React, { PureComponent } from 'react'
import css from './Line.scss'

class Line extends PureComponent {

  render () {
    const {
      children
    } = this.props

    let body = children
    let tag = null

    // TODO: Refactor!
    if (children) {
      const parts = children.split(/([\*\#])+\s?/)

      if (parts.length > 1) {
        const prefix = parts[1]
        body = parts[2]

        if (prefix) {
          if (prefix === "*") {
            tag = <span className={css.Bullet}>{prefix}</span>
          } else if (prefix.match(/#/)) {
            tag = <span className={css.HeaderSymbol}>{prefix}</span>
            body = <span className={css.Header}>{body}</span>
          }
        }
      }
    }

    return (
      <div className={css.Line}>
        <div className={css.LineNumber}>
          {this.props.number}
        </div>

        <div className={css.Content}>
          {tag && tag}
          {' '}
          {body}
        </div>
      </div>
    )
  }
}

export default Line
