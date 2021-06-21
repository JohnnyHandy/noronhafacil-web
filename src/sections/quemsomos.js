import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const sectionTitle = css`
  color: ${colors.noronhaBlue};
`

const sectionContainerCss = css`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  min-height: 950px;
  position: relative;
  width: 100%;
  @media (max-width: 650px) {
    align-items: flex-start;
  };
`

const imageContainerCss = css`
  height: 100%;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    position: absolute;
  };
`

const sectionDescriptionCss = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    max-width: 50%;
    padding: 1em 0;
    text-align: center;
    @media (max-width: 1024px) {
      background-color: rgba(240, 248, 255, 0.54);
      max-width: initial;
      padding: 1em;
      position: relative;
    };  
`

const paragraphsContainerCss = css`
  font-size: 1.2em;
  letter-spacing: 8px;
  line-height: 2.5em;
  padding: 0 1em; 
  text-align: center;
  @media (max-width: 650px) {
    letter-spacing: 5px;
    line-height: 1.5em;
  };
  @media only screen and (min-width: 1025px) and (max-width: 1280px){
    font-size: 1em;
    letter-spacing: 4px;
    line-height: 1.5em;
  };
  @media only screen and (min-width: 1281px) and (max-width: 1400px){
    font-size: 1.2em;
    letter-spacing: 8px;
    line-height: 1.5em;
  };
  @media only screen and (min-width: 1401px) and (max-width: 1700px){
    font-size: 1.3em;
    letter-spacing: 8px;
    line-height: 2em;
  };
`

const QuemSomos = ({ sectionRef, height }) => {
  return (
    <div
    ref={sectionRef}
    css={sectionContainerCss}
    >
    <div
      css={imageContainerCss}
    >
      <StaticImage
        aspectRatio={712/712}
        style={{ width: '100%', height: '100%' }}
        imgStyle={{ width: '100%', height: '100%' }}
        src='../images/quemsomos.jpg'
        alt='Noronha Fácil'
      />
    </div>
    <div
      css={sectionDescriptionCss}
    >
    <h1 css={sectionTitle}> Quem somos </h1>
        <div
          css={paragraphsContainerCss}
        >
          <p>
            SOMOS UMA EMPRESA JOVEM, QUE CONHECE E ENTENDE BEM DAS NECESSIDADES DE NOSSOS CLIENTES.
          </p>
          <p>
          SURGIMOS COM O IDEAL DE PROVAR QUE NORONHA PODE SER SIM PARA TODOS, E TEMOS COMO OBJETIVO REALIZAR O SEU SONHO DE CONHECER ESSE PARAÍSO, DE UM MODO FÁCIL E ORÇAMENTOS PERSONALIZADOS QUE CABEM NO SEU BOLSO.
          </p>
        </div>
    </div>
    </div>
  )
}

export default QuemSomos