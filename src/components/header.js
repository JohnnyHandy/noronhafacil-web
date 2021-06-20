import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { Slide, useScrollTrigger } from '@material-ui/core';

import { colors } from '../utils/constants'

const navLink = css`
  color: ${colors.noronhaBlue};
  cursor: pointer;
  font-family: Open Sans;
  font-size: 24px;
  font-weight: bold;
  margin: 0 1.5em;
  @media (max-width: 650px) {
    white-space: pre;
  };

`

const headerCss = css`
  background: white;
  box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.75);
  margin-bottom: 1.5em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  @media (max-width: 650px) {
    max-width: 100vw;
  };
`

const headerContainerCss = css`
  display: flex;
  flex-direction: column;
  padding: 1em;
`
const navLinksContainer = css`
  margin: auto;
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    grid-row-gap: 1em;  
  };

`

const Header = ({ allRefsObject, scrollToRef, headerHeight, ...rest }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <header
      id='header'
      css={headerCss}
    >
      <div
        css={headerContainerCss}
      >
        <StaticImage style={{ margin: 'auto', width: '20em' }} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
        <div
          css={navLinksContainer}
        >
          <span onClick={() => scrollToRef(allRefsObject.MainRef)} css={navLink}>Início</span>
          <span onClick={() => scrollToRef(allRefsObject.PasseiosRef)} css={navLink}>Catálogo</span>
          <span onClick={() => scrollToRef(allRefsObject.QuemSomosRef)} css={navLink}>Quem somos</span>
          <span  onClick={() => scrollToRef(allRefsObject.ContatosRef)} css={navLink}>Contato</span>
        </div>
      </div>
    </header>

    </Slide>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
