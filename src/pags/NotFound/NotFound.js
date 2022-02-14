import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  const goTo = useNavigate();
  return (
    <div>
      <h2>¡Ups! Algo no salió bien</h2>
      <p className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</p>
    </div>
  )
}

export default NotFound;