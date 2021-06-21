import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from 'gatsby-plugin-image'
import { css, keyframes } from '@emotion/react'
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

const animationKeyFrame = keyframes`
  from {
    transform: translateY(15px);
    display: none;
    opacity: 0;
  }
  to {
    transform: translate(0);
    display: block;
    opacity: 1;
  }
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
  animation: ${animationKeyFrame} 1s ease;
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
        <StaticImage
          style={{ margin: 'auto', width: '20em' }}
          aspectRatio={500/161} src={'../images/noronhafacil-logo.png'}
          alt='Noronha Fácil Turismo'
        />
        <div
          css={navLinksContainer}
        >
          <span
            onClick={() => scrollToRef(allRefsObject.MainRef)}
            onKeyDown={() => scrollToRef(allRefsObject.MainRef)}
            role='button'
            tabIndex="-5"
            css={navLink}
          >
            Início
          </span>
          <span
            onClick={() => scrollToRef(allRefsObject.PasseiosRef)}
            onKeyDown={() => scrollToRef(allRefsObject.PasseiosRef)}
            css={navLink}
            role='button'
            tabIndex="-4"
            >
              Catálogo
          </span>
          <span
            onClick={() => scrollToRef(allRefsObject.QuemSomosRef)}
            onKeyDown={() => scrollToRef(allRefsObject.QuemSomosRef)}
            css={navLink}
            role='button'
            tabIndex='-3'
            >
              Quem somos
          </span>
          <span 
            onClick={() => scrollToRef(allRefsObject.ContatosRef)}
            onKeyDown={() => scrollToRef(allRefsObject.ContatosRef)}
            css={navLink}
            role='button'
            tabIndex='-2'
            >
              Contato
          </span>
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
