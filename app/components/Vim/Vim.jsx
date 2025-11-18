import React, { Component } from 'react'
import data from 'app/data.json'
import Link from 'components/shared/Link/Link'
import Lines from './Lines/Lines'
import Line from './Line/Line'
import css from './Vim.module.scss'

class Vim extends Component {

  render () {
    return (
      <div className={css.Vim}>
        <Lines>
          <div kind="h1">Ross Haliburton Noble</div>
          <div></div>
          <div kind="h2">About Me</div>
          <div></div>
          <div>I am a software developer from Vancouver, Canada. &#127464;&#127462; I like working</div>
          <div>with Ruby, JavaScript and Go, but mostly I enjoy making cool stuff.</div>
          <div></div>
          <div>When not working, I enjoy reading, <Link href={data.links.strava}>running</Link> and watching {' '}
            <Link href={data.links.ce}>movies</Link>. In 2016, I walked</div>
          <div>from Mexico to Canada on the <Link href={data.links.pcta}>Pacific Crest Trail</Link>. I now live in a converted</div>
          <div>Sprinter van named Betsy. &#128656;</div>
          <div></div>
          <div kind="h2">Work Experience</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.fntc}>First Nations Technology Council</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.domain7}>Domain7</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.tickit}>Tickit Health</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.rocksauce}>Rock Sauce Studios</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.passwordbox}>PasswordBox</Link>{' / '}
            <Link href={data.links.intel}>Intel</Link>
          </div>
          <div></div>
          <div kind="h2">Personal Projects</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.ce}>Cinema Esoterica Podcast</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.fifteen}>{'15x365 Run Club'}</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.pjmsl}>PJM Softball</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.burnreel}>Burnreel</Link>
          </div>
          <div></div>
          <div kind="h2">Contact / Links</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.instagram}>Instagram</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.github}>Github</Link>
          </div>
          <div kind="bullet">
            <a href={`mailto:${data.links.email}?subject=Hi`}>Email</a>
            <div className={css.Cursor} />
          </div>
        </Lines>

        <div className={css.StatusBar}>
          <div className={css.StatusTop}>
            {data.filename}
          </div>
          <div className={css.StatusBottom}>
            {data.filename} 32L, 326C written
          </div>
        </div>
      </div>
    )
  }
}

export default Vim
