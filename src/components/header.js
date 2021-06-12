import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const navLink = css`
  color: ${colors.noronhaBlue};
  cursor: pointer;
  font-family: Open Sans;
  font-size: 24px;
  font-weight: bold;
  margin: 0 1.5em;
`

const headerCss = css`
  background: white;
  box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.75);
  margin-bottom: 1.5em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

const Header = () => (
  <header id='header' css={headerCss}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1em'
      }}
    >
      <StaticImage style={{ margin: 'auto', width: '20em' }} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
      <div
        style={{
          margin: 'auto'
        }}
      >
        <span css={navLink}>Início</span>
        <span css={navLink}>Passeios</span>
        <span css={navLink}>Quem somos</span>
        <span css={navLink}>Contato</span>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
