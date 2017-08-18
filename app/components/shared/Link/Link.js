import React, { PureComponent } from 'react'

class Link extends PureComponent {
  render () {
    const {
      children,
      external,
      className,
      href,
    } = this.props

    return (
      <a
        href={href}
        target={external ? '_blank' : ''}
        className={className}
      >
        {children}
      </a>
    )
  }
}

Link.defaultProps = {
  external: true,
}

export default Link
