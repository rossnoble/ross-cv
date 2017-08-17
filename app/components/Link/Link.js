import React, { PureComponent } from 'react'

class Link extends PureComponent {
  render () {
    const {
      children,
      external,
      href,
    } = this.props

    return (
      <a href={href} target={external ? '_blank' : ''}>
        {children}
      </a>
    )
  }
}

Link.defaultProps = {
  external: true,
}

export default Link
