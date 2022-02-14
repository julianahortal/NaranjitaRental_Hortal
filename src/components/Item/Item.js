import React from 'react';
import {useNavigate } from 'react-router-dom';
import {useCarrito} from '../../context/CarritoContext'
import { Button } from '@mui/material';
import { IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Item.css';





const Item = ({ producto }) => {
  const goTo = useNavigate();
  const {agregarItem} = useCarrito();
  return (
    
      <div className="item-card ">
            <img className="img-fluid" src={producto.img + '?v=' + producto.id} alt=""/>
            <div className='text-center'>
            <h4>{producto.titulo}</h4>
            <p>Precio por jornada: ${producto.precio}</p>
            <div className="row-text">
            <Button  size="small" color="primary" variant="outlined" onClick = { () => goTo(`/alquiler-de-equipos/${producto.id}`)}>Ver más</Button>
            <IconButton  size="small" onClick={() => agregarItem(producto)} variant="contained" color="primary" aria-label="Agregar al carrito">
              <AddShoppingCartIcon />
            </IconButton>
                 
            </div>
            </div>
            
        
    </div>
    
  );
};
  
  export default Item;
