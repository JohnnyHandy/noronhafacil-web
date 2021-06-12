import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const footerContactTitle = css`
  color: ${colors.noronhaBlue};
  @media (max-width: 650px) {
    text-align: center;
  };
`

const footerContainer = css`
  box-shadow: 0px -10px 21px 0px rgba(0,0,0,0.75);
`

const footerInnerContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 0.25fr);
  @media (max-width: 650px) {
    grid-template-columns: 30% 70%;
  };
`

const logoCss = css`
  margin: auto;
  width: 20em;
  @media (max-width: 650px) {
    width: auto;
  };
`

const spanCss = css``

const Footer = () => {
  return (
    <footer css={footerContainer}>
      <div
        css={footerInnerContainer}
      >
        <div
          style={{ display: 'grid' }}
        >
          <StaticImage css={logoCss} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
          <span style={{ margin: 'auto' }}> © 2021 por NoronhaFácil </span>
        </div>
        <div>
          <h3 css={footerContactTitle}> Contato </h3>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/whatsapp.svg'} />
            <span css={spanCss} > Thiego: 83 99999-9999 </span>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/instagram.svg'} />
            <span css={spanCss}> @noronhafacil </span>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/mail.svg'} />
            <span css={spanCss}> thiego@noronhafacil.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer