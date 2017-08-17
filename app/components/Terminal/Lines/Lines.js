import React, { PureComponent } from 'react'
import Line from '../Line/Line'

class Lines extends PureComponent {

  render () {
    const {
      children
    } = this.props

    const lines = children.map((child, index) => {
      return (
        <Line number={index + 1} key={index}>
          {child.props.children}
        </Line>
      )
    })

    return (
      <div>
        {lines}
      </div>
    )
  }
}

export default Lines
