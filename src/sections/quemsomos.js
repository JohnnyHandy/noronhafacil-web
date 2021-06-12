import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const sectionTitle = css`
  color: ${colors.noronhaBlue};
`
const quemSomosDesc = 'O passeio é quase obrigatório para quem está indo pela primeira vez ao arquipélago, com acesso às principais praias, pontos históricos, incríveis mirantes,'

const QuemSomos = () => {
  return (
    <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2em 0',
      width: '100%',
    }}
  >
      <h1 css={sectionTitle}> Quem somos </h1>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <StaticImage style={{ maxWidth: '20%' }} src='../images/somos1.jpg' />
        <p
          style={{
            margin: '0 2em',
            maxWidth: '30%',
            textAlign: 'center'
          }}
        >{quemSomosDesc.repeat(3)}</p>
        <StaticImage style={{ maxWidth: '20%' }} src='../images/somos1.jpg' />
      </div>
    </div>
  )
}

export default QuemSomos