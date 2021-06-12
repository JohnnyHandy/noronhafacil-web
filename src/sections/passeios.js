import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

import { colors } from '../utils/constants'

const sectionTitle = css`
  color: ${colors.noronhaBlue};
`
const PasseioDesc = 'Esse é o passeio mais completo para conhecer as belezas de toda a ilha de Fernando de Noronha'

const Passeios = () => {
  const PasseiosGrid = () => {
    return [...Array(6)].map((_, index) => (
      <div
      key={index}
      style={{ display: 'flex', border: `1px solid ${colors.noronhaBlue}` }}
      >
    <StaticImage style={{ width: '35em' }} src={'../images/passeio.jpg'} />
      <div
        style={{ textAlign: 'center', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
        <h3>Passeio {index}</h3>
        <p>
          {PasseioDesc}
        </p>
        <div
          style={{ background: `${colors.noronhaBlue}`, color: 'white', padding: '1em', width: 'fit-content', textTransform: 'uppercase' }}
        >
          Ver mais
        </div>
        </div>
        <div
         style={{ background: `lightgreen`, color: 'white', padding: '1em', margin: '0 auto', textTransform: 'uppercase' }}
        >
          Comprar Agora
        </div>
      </div>
    </div>
    ))
  }
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
      <h1 css={sectionTitle}> Nossos Passeios </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 0.5fr)',
          columnGap: '2em',
          rowGap: '1em'
        }}
      >
       <PasseiosGrid />

      </div>
    </div>
  )
}

export default Passeios