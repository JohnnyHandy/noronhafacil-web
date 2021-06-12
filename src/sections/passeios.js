import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

import { colors } from '../utils/constants'

const sectionTitle = css`
  color: ${colors.noronhaBlue};
`
const gridContainerCss = css`
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  column-gap: 2em;
  row-gap: 1em;
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  };

`
const gridImageCss = css`
  width: 35em;
  @media (max-width: 650px) {
    width:100%
  };
`
const PasseiosGridCss = css`
  display:flex;
  border: 1px solid ${colors.noronhaBlue};
  @media (max-width: 650px) {
    flex-direction: column;
  };
`

const verMaisButton = css`
  background: ${colors.noronhaBlue};
  color: white;
  padding: 1em;
  width: fit-content;
  text-transform: uppercase;
  @media (max-width: 650px) {
    margin: 0.5em auto;
  };

`
const comprarAgoraButton = css`
  background: lightgreen;
  color: white;
  padding: 1em;
  margin: 0 auto;
  width: fit-content;
  text-transform: uppercase;
  @media (max-width: 650px) {
    margin: 0.5em auto;
  };
`


const PasseioDesc = 'Esse é o passeio mais completo para conhecer as belezas de toda a ilha de Fernando de Noronha'

const Passeios = () => {
  const PasseiosGrid = () => {
    return [...Array(6)].map((_, index) => (
      <div
      key={index}
      css={PasseiosGridCss}
      >
    <StaticImage css={gridImageCss} src={'../images/passeio.jpg'} />
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
         css={verMaisButton}
        >
          Ver mais
        </div>
        </div>
        <div
        css={comprarAgoraButton}
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
        css={gridContainerCss}
      >
       <PasseiosGrid />

      </div>
    </div>
  )
}

export default Passeios