import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'



const MainSection = ({ height, sectionRef }) => {
  return(
    <div
    ref={sectionRef}
    style={{
      alignItems: 'flex-start',
      display: 'flex',
      justifyContent: 'center',
      height: height,
      maxHeight: '100vh',
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
       <StaticImage style={{ margin: '5em auto' }} aspectRatio={500/161} src={'../images/noronhafacil-logo.png'} alt='Noronha Fácil Turismo' />
      </div>
    </div>
  )
}

export default MainSection