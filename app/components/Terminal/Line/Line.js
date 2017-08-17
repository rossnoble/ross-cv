import React, { PureComponent } from 'react'
import css from './Line.scss'

class Line extends PureComponent {

  render () {
    const {
      children,
      kind,
    } = this.props

    let body = children
    let tag = null

    // Build header tag
    const matches = kind && kind.match(/h(\d)/)
    if (matches) {
      const count = parseInt(matches[1])
      const header = Array(count).fill('#').join('')

      tag = <span className={css.HeaderSymbol}>{header}</span>
      body = <span className={css.Header}>{body}</span>
    }

    // Build bullet tag
    if (kind === 'bullet') {
      tag = <span className={css.Bullet}>*</span>
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
