import React, { Component } from 'react'
import data from 'app/data.json'
import Link from 'components/shared/Link/Link'
import Lines from './Lines/Lines'
import css from './Vim.module.scss'

class Vim extends Component {
  render() {
    return (
      <div className={css.Vim}>
        <Lines>
          <div kind="h1">Ross Haliburton Noble</div>
          <div></div>
          <div kind="h2">About me</div>
          <div></div>
          <div>I am a software developer from Vancouver, Canada. &#127464;&#127462;</div>
          <div></div>
          <div>
            I enjoy reading, <Link href={data.links.strava}>running</Link> and watching{' '}
            <Link href={data.links.ce}>movies</Link>. In 2016, I walked from Mexico
          </div>
          <div>
            to Canada on the <Link href={data.links.pcta}>Pacific Crest Trail</Link>. Afterwards I
            lived in a converted Sprinter
          </div>
          <div>van for five years. &#128656;.</div>
          <div></div>
          <div>I now live in Montreal with my wife and son.</div>
          <div></div>
          <div kind="h2">{"Places I've worked"}</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.paytient}>Paytient</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.breathelife}>BreatheLife</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.fntc}>First Nations Tech Council</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.tickit}>Tickit Health</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.rocksauce}>Rock Sauce Studios</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.intel}>Intel</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.passwordbox}>PasswordBox</Link>
          </div>
          <div></div>
          <div kind="h2">Personal projects</div>
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
          <div kind="h2">Elsewhere</div>
          <div></div>
          <div kind="bullet">
            <Link href={data.links.github}>Github</Link>
          </div>
          <div kind="bullet">
            <Link href={data.links.x}>X</Link>
          </div>
        </Lines>

        <div className={css.StatusBar}>
          <div className={css.StatusTop}>{data.filename}</div>
          <div className={css.StatusBottom}>{data.filename} 32L, 326C written</div>
        </div>
      </div>
    )
  }
}

export default Vim
