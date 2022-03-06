import React from 'react';
import {useNavigate} from 'react-router-dom';

import { Button } from '@mui/material';

import './Item.css';



const Item = ({ producto }) => {

  const goTo = useNavigate();
  return (
    
      <div className="item-card ">
            <img className="img-fluid" src={producto.img + '?v=' + producto.id} alt=""/>
            <div className='text-center'>
              <h6 className='titulo-h6'>{producto.titulo}</h6>
              <p>Precio por jornada: ${producto.precio}</p>
              <div className="row-text">
                <Button  size="small" color="primary" variant="outlined" onClick = { () => goTo(`/alquiler-de-equipos/${producto.id}`)}>Ver más</Button>                              
              </div>
            </div>
    </div>
    
  );
};
  
  export default Item;
