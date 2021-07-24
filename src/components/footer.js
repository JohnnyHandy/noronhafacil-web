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
  background: white;
  box-shadow: 0px -10px 21px 0px rgba(0,0,0,0.75);
  padding: 1em 0;
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

const Footer = ({ sectionRef }) => {
  return (
    <footer ref={sectionRef} css={footerContainer}>
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
            <StaticImage style={{ width: '2em' }} src={'../images/whatsapp.svg'} alt='WhatsApp' />
            <span css={spanCss} > 83 996498582 </span>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/instagram.svg'} alt='Instagram' />
            <a target='_blank' href={'https://www.instagram.com/noronhafacil/'} css={spanCss}> @noronhafacil </a>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/mail.svg'} alt='Email' />
            <span css={spanCss}> noronhafacil@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer