import React, { Component } from 'react'
import data from 'app/data.json'
import css from './Vim.scss'

class Vim extends Component {

  render () {
    return (
      <div className={css.Vim}>
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
