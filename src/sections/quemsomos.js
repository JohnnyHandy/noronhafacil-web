import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import { colors } from '../utils/constants'

const sectionTitle = css`
  color: ${colors.noronhaBlue};
`

const sectionContainerCss = css`
  align-items: center;
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
  @media (max-width: 650px) {
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
    @media (max-width: 650px) {
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
  text-align: center;
  @media (max-width: 650px) {
    letter-spacing: 5px;
    line-height: 1.5em;
  };
`
const quemSomosDesc = 'O passeio é quase obrigatório para quem está indo pela primeira vez ao arquipélago, com acesso às principais praias, pontos históricos, incríveis mirantes,'

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
        aspectRatio={2053/1368}
        style={{ width: '100%', height: '100%' }}
        imgStyle={{ width: '100%', height: '100%' }}
        src='../images/somos4.jpg'
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