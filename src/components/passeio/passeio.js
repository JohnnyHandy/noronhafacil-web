import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { colors, phoneNumber, welcomeMessage } from '../../utils/constants'

const passeioInfoContainerCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  min-height: 50vh;
  @media (max-width: 1024px) {
    min-height: 40vh;
    width:100%
  };
`
const PasseiosGridCss = css`
  background: white;
  display:grid;
  grid-template-columns: 50% 50%;
  border: 1px solid ${colors.noronhaBlue};
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  };
`
const buyContainerCss = css`
  margin-top: 1.5em;
  display: grid;
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

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`

const Passeio = ({ passeio, imageData }) => {
  const [seeMore, setSeeMore] = React.useState(false)
  const imageKey = Object.keys(imageData).find(key => key === passeio.imageKey)
  const image = getImage(imageData[imageKey])
  return (
    <div
      key={passeio.name}
      css={PasseiosGridCss}
      >
    <GatsbyImage css={gridImageCss} alt={passeio.imageKey} image={image} />
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
            <div>
            <span css={oldPriceCss} > {passeio.oldPrice !== null && `R$${passeio.oldPrice}`} </span>
            <span css={priceCss}> R$ {passeio.price} </span>
            </div>
          )
        }
        <Link
        css={comprarAgoraButton}
        target='_blank'
        to={url}
        >
          Comprar Agora
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Passeio