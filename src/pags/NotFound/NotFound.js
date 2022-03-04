import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './NotFound.css'

const NotFound = () => {

  const goTo = useNavigate();
  return (
    <div>
      <h2>¡Ups! Algo no salió bien</h2>
      <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_k51eixib.json" style={{ height: '400px', width: '400px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
      <h4 className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</h4>
    </div>
  )
}

export default NotFound;