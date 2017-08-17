import React, { Component } from 'react'
import data from 'app/data.json'
import Line from '../Line/Line'
import css from './Vim.scss'

class Vim extends Component {

  render () {
    return (
      <div className={css.Vim}>
        <Line number={1}># Ross Haliburton Noble</Line>
        <Line number={2}></Line>
        <Line number={3}>## About / Work</Line>
        <Line number={4}></Line>
        <Line number={5}>* Software developer from Vancouver, Canada</Line>
        <Line number={6}>* Formerly of PasswordBox, Intel, Rocksauce</Line>

        <div className={css.StatusBar}>
          <div className={css.StatusTop}>
            {data.filename}
          </div>
          <div className={css.StatusBottom}>
            {data.filename} 20L, 326C written
          </div>
        </div>
      </div>
    )
  }
}

export default Vim
