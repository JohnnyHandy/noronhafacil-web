import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { colors } from '../utils/constants'

const MainSection = ({ height, headerHeight }) => {
  return(
    <div
    style={{
      alignItems: 'flex-start',
      display: 'flex',
      justifyContent: 'center',
      height,
      width: '100%',
    }}
  >
      <div
        style={{
          position: 'absolute',
          zIndex: '-1',
          width: '100%',
          height: '100%'
        }}
      >
        <StaticImage
          aspectRatio={1350/900}
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ width: '100%', height: '100%' }}
          src='../images/main.jpg'
          alt='Noronha Fácil'
        />
      </div>
      <div>
       <StaticImage style={{ margin: 'auto' }} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
       <h1 style={{ fontSize: '50px', color: colors.noronhaBlue }}> Sua aventura começa aqui! </h1>
      </div>
    </div>
  )
}

export default MainSection