import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const footerContactTitle = css`
  color: ${colors.noronhaBlue};
`

const footerContainer = css`
  box-shadow: 0px -10px 21px 0px rgba(0,0,0,0.75);
`

const Footer = () => {
  return (
    <footer css={footerContainer}>
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 0.25fr)',  }}
      >
        <div
          style={{ display: 'grid' }}
        >
          <StaticImage style={{ margin: 'auto', width: '20em' }} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
          <span style={{ margin: 'auto' }}> © 2021 por NoronhaFácil </span>
        </div>
        <div>
          <h3 css={footerContactTitle}> Contato </h3>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/whatsapp.svg'} />
            <span> Thiego: 83 99999-9999 </span>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/instagram.svg'} />
            <span> @noronhafacil </span>
          </div>
          <div>
            <StaticImage style={{ width: '2em' }} src={'../images/mail.svg'} />
            <span> thiego@noronhafacil.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer