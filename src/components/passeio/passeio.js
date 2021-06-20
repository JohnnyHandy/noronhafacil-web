import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

import { colors } from '../../utils/constants'

const passeioInfoContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center; padding: 1em;   
`

const passeioDescriptionCss = css`
  align-items: center;
  display: flex;
  flex-direction: column;

`

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
const buyContainerCss = css`
  margin-top: 1.5em;
`


const oldPriceCss = css`
  color: lightgray;
  text-decoration: line-through;
`

const priceCss = css`
  font-size: 1.5em;
  font-weight: bold;
  margin: 1em 0;
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
// const verMaisCss = css`
//   ${props => props.seeMore ?
//     `display: block;
//     opacity: 0%;
//     ` :
//     ''}
// `

const comprarAgoraButton = css`
  background: lightgreen;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 1em;
  margin: 0 auto;
  width: fit-content;
  text-transform: uppercase;
  @media (max-width: 650px) {
    margin: 0.5em auto;
  };
  &:hover{
    background: #21b300;
    box-shadow: 0px 10px 5px -2px rgb(144, 238, 144);
  }
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
      css={passeioInfoContainerCss}
      >
        <div
          css={passeioDescriptionCss}
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
         role='button'
         tabIndex={passeio.name}
         onKeyDown={() => {
           setSeeMore(!seeMore)
         }}
         onClick={() => setSeeMore(!seeMore)}
        >
          Ver mais
        </div>
        </div>
        <div
          css={buyContainerCss}
        >
        {
          passeio.price === null ? (
            <span> Consulte-nos para orçamento </span>
          ) : (
            <>
            <span css={oldPriceCss} > {passeio.oldPrice !== null && `R$${passeio.oldPrice}`} </span>
            <span css={priceCss}> R$ {passeio.price} </span>
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