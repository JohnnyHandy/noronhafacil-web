import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

import { colors } from '../../utils/constants'


const gridImageCss = css`
  align-self: center;
  max-height: 50vh;
  @media (max-width: 650px) {
    width:100%
  };
`
const PasseiosGridCss = css`
  display:grid;
  grid-template-columns: 50% 50%;
  border: 1px solid ${colors.noronhaBlue};
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  };
`
const verMaisButton = css`
  background: ${colors.noronhaBlue};
  color: white;
  cursor: pointer;
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
  cursor: pointer;
  padding: 1em;
  margin: 0 auto;
  width: fit-content;
  text-transform: uppercase;
  @media (max-width: 650px) {
    margin: 0.5em auto;
  };
`


const Passeio = ({ passeio }) => {
  const [seeMore, setSeeMore] = React.useState(false)
  return (
    <div
      key={passeio.name}
      css={PasseiosGridCss}
      >
    <StaticImage css={gridImageCss} src='../../images/passeio.jpg' />
      <div
        style={{ textAlign: 'center', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
        <h3>{passeio.name}</h3>
        <p>
          {passeio.summary}
        </p>
          <p
            style={{
              display: seeMore ? 'block' : 'none'
            }}
          >
            {passeio.description}
          </p>
        <div
         css={verMaisButton}
         onClick={() => setSeeMore(!seeMore)}
        >
          Ver mais
        </div>
        </div>
        <div>
        {
          passeio.price === null ? (
            <span> Consulte-nos para orçamento </span>
          ) : (
            <>
            <span style={{ textDecoration: 'line-through', color: 'lightgray' }} > {passeio.oldPrice !== null && `R$${passeio.oldPrice}`} </span>
            <span style={{ fontWeight: 'bold', fontSize: '1.5em', margin: '1em 0' }}> R$ {passeio.price} </span>
            </>
          )
        }
        <div
        css={comprarAgoraButton}
        >
          Comprar Agora
        </div>

        </div>
      </div>
    </div>
  )
}

export default Passeio