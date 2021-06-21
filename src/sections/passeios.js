import React from 'react'
import { css, keyframes } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import PasseioContainer from '../components/passeio/passeio'

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

const animationKeyFrame = keyframes`
  from {
    transform: translateY(15px);
    display: none;
    opacity: 0;
  }
  to {
    transform: translate(0);
    display: block;
    opacity: 1;
  }
`


const passeiosContainerCss = css`
  align-items: center;
  animation: ${animationKeyFrame} 1s ease;
  display: flex;
  flex-direction: column;
  justifyContent: center;
  padding: 2em 0;
  width: 100%;
`

const passeiosInfo = [
  {
    name: 'ILHA TOUR COLETIVO',
    imageKey: 'tourcoletivo',
    summary: 'Esse é o passeio mais completo para conhecer as belezas de toda a ilha de Fernando de Noronha.',
    description: 'O passeio é quase obrigatório para quem está indo pela primeira vez ao arquipélago, com acesso às principais praias, pontos históricos, incríveis mirantes, também é realizada parada para banhos e mergulho livre, terminando com um inesquecível pôr do sol. Em um único dia você terá conhecido todos os pontos mais famosos de Fernando de Noronha.',
    price: '220',
    oldPrice: '260'
  },
  {
    name: 'ENTARDECER',
    imageKey: 'entardecer',
    summary: 'Passeio de barco com Planasub incluso! Com o Planasub você pode mergulhar a uma profundidade de até 4 metros, se quiser, sendo puxado pelo barco, com visão privilegiada de peixes, arraias e tartarugas. Todos serão sua companhia neste passeio.',
    description: 'A embarcação tem saída do Porto de Santo Antônio passando próximo as ilhas secundárias e segue costeando as Praias, do Cachorro, Meio, Conceição, Boldró, Americano, Bode, Quixabinha e Cacimba do Padre, chegando em nosso principal cartão postal, o MORRO DOIS IRMÃOS, em seguida o Barco retorna e faz uma parada na praia da Conceição onde você poderá acompanhar um incrível pôr do sol embarcado.',
    price: null,
    oldPrice: null
  },
  {
    name: 'CANOA HAVAIANA',
    imageKey: 'canoa',
    summary: 'Navegue nas embarcações milenares do Triângulo Polinésio.',
    description: 'Para quem busca aventura e contemplação no cenário paradisíaco da Ilha de Fernando de Noronha. A expedição tem saída na Praia do Porto em direção ao Air France, Rugido do Leão, Praia do Cachorro, Praia do Meio e Conceição, realizada em aproximadamente 2 horas e 6km com parada pra banho e mergulho. Os passeios podem ser individuais ou em grupos, sem a necessidade de experiência anterior, sempre com a orientação do guia a bordo.',
    price: '200',
    oldPrice: '250'
  },
  {
    name: 'MERGULHO BATISMO',
    imageKey: 'mergulho',
    summary: 'Deslumbre de perto toda a exuberante vida marinha de Noronha e viva essa experiência!',
    description: 'O mergulho inicia na praia do Porto, com uma fase de adaptação inicial em águas rasas, após isso parte em direção ao icônico Naufrágio do Porto de Santo Antônio, cartão postal da ilha e lar de uma incrível diversidade de vida marinha, como peixes, arraias e tartarugas. Haverá uma explicação prévia sobre o funcionamento dos equipamentos, flutuabilidade e conceitos básicos de segurança para o mergulho. O percurso será acompanhado pelo instrutor credenciado e todo equipamento e material para o mergulho está incluso.',
    price: '400',
    oldPrice: null
  },
  {
    name: 'PASSEIO DE BARCO TRADICIONAL',
    imageKey: 'barco',
    summary: 'CONHEÇA A PRAIA MAIS BONITA DO MUNDO!',
    description: 'Com grande  possibilidade de ver os golfinhos rotadores acompanharem o barco em uma das cenas mais famosas de Fernando de Noronha. Esse passeio percorre toda a extensão do Mar de Dentro, passando pelas principais praias da ilha, com pausa para banho na Baía do Sancho, praia eleita pelo TripAdvisor como a melhor do mundo!',
    price: null,
    oldPrice: null
  },
  {
    name: 'TRILHA DO PIQUINHO',
    imageKey: 'trilha',
    summary: 'TENHA UMA VISTA ÚNICA DO PARAISO!',
    description: 'Se inicia em trilha sombreada pela vegetação e segue até a base do morro do Piquinho, durante o trajeto, que mescla subida e alguns minutos de caminhadas, é possível observar espécies da flora e fauna nativas. O ponto alto da trilha consiste na chegada ao topo do morro do Piquinho (217m), e sua incrível visão panorâmica da Ilha.',
    price: '150',
    oldPrice: '200'
  },
  {
    name: 'ILHA TOUR PRIVATIVO',
    imageKey: 'tourprivado',
    summary: 'Realizado em veículo exclusivo para seu grupo/individual. Esse é o passeio mais completo para conhecer as belezas de toda a ilha de Fernando de Noronha.',
    description: 'O passeio é quase obrigatório para quem está indo pela primeira vez ao arquipélago,  com acesso às principais praias, pontos históricos, incríveis mirantes, também é realizada parada para banhos e mergulho livre, terminando com um inesquecível pôr do sol.  Em um único dia você terá conhecido os pontos mais famosos de Fernando de Noronha.',
    price: null,
    oldPrice: null
  },
  {
    name: 'LANCHA PRIVATIVA',
    imageKey: 'lancha',
    summary: 'Conheça Noronha em grande estilo!',
    description: 'A bordo de uma exclusiva embarcação, você e sua turma irão desfrutar as belezas das principais praias da ilha. A atividade de Planasub (pranchinha) faz parte do passeio, nela você pode mergulhar a uma profundidade de até 4 metros, se quiser, sendo puxado pela lancha. Também está Incluso churrasco de peixe servido a bordo e equipamento de mergulho. Todo percurso será acompanhado pelo condutor.',
    price: null,
    oldPrice: null
  },
  {
    name: 'ALUGUEL DE BUGGY',
    imageKey: 'buggy',
    summary: 'Nada melhor do que ter autonomia na sua viagem. Nós temos os melhores veículos 4x4 para você!',
    description: 'Nada melhor do que ter autonomia na sua viagem. Nós temos os melhores veículos 4x4 para você!',
    price: null,
    oldPrice: null

  }
]


const Passeios = ({ sectionRef }) => {
  const imageData = useStaticQuery(
    graphql`
    query {
      tourcoletivo: file(relativePath: { eq: "tourcoletivo.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      entardecer: file(relativePath: { eq: "entardecer.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      canoa: file(relativePath: { eq: "canoa.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      mergulho: file(relativePath: { eq: "mergulho.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      canoa: file(relativePath: { eq: "canoa.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      barco: file(relativePath: { eq: "barco.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      trilha: file(relativePath: { eq: "trilha.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      tourprivado: file(relativePath: { eq: "tourprivado.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      lancha: file(relativePath: { eq: "lancha.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      buggy: file(relativePath: { eq: "buggy.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
   `
  )
  const PasseiosGrid = () => {
    return passeiosInfo.map((passeio, index) => ( <PasseioContainer passeio={passeio} imageData={imageData} /> ))
  }
  return (
    <div
      ref={sectionRef}
      css={passeiosContainerCss}
    >
      <h1 css={sectionTitle}> Nosso Catálogo  </h1>
      <div
        css={gridContainerCss}
      >
       <PasseiosGrid />

      </div>
    </div>
  )
}

export default Passeios