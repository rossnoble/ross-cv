import React, { Component } from 'react'
import data from 'app/data.json'
import Lines from '../Lines/Lines'
import Line from '../Line/Line'
import css from './Vim.scss'

class Vim extends Component {

  render () {
    return (
      <div className={css.Vim}>
        <Lines>
          <div># Ross Haliburton Noble</div>
          <div></div>
          <div>## About / Work</div>
          <div></div>
          <div>* Formerly of PasswordBox, Intel, Rocksauce</div>
          <div>* Software developer from Vancouver, Canada 🇨🇦 </div>
          <div>* Ruby, JavaScript, Golang</div>
          <div></div>
          <div>## Hobbies / Interests</div>
          <div></div>
          <div>* Ultra running 👟</div>
          <div>* Long-distance hiking (PCT 2016)</div>
          <div>* Crossword puzzles</div>
          <div>* Table tennis 🏓</div>
          <div></div>
          <div>## Projects</div>
          <div></div>
          <div>* PJM Softball</div>
          <div>* Burnreel</div>
          <div>* Capital G (now defunct)</div>
          <div>* Carabiner (now defunct)</div>
          <div></div>
          <div>## Contact / Elsewhere</div>
          <div></div>
          <div>* Instagram</div>
          <div>* Github</div>
          <div>* AngelList</div>
          <div>* Email</div>
        </Lines>

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
