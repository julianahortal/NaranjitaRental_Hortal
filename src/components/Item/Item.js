import React from 'react';
import './Item.css';
import {useNavigate } from 'react-router-dom';
import {useCarrito} from '../../context/CarritoContext'

const Item = ({ producto }) => {
  const goTo = useNavigate();
  const {agregarItem} = useCarrito();
  return (
    
      <div className="item-card ">
            <img className="img-fluid" src={producto.img + '?v=' + producto.id} alt=""/>
            <p>{producto.titulo}</p>
            <h6 className="text-left">Precio por jornada: ${producto.precio}</h6>
            <div className="text-right">
                <div onClick = { () => goTo(`/alquiler-de-equipos/${producto.id}`)} className="btn btn-link btn-sm mr-2">Ver más</div>
                <button onClick={() => agregarItem(producto)}className="btn btn-primary btn-sm">Agregar al carrito</button>            
            </div>
        
    </div>
    
  );
};
  
  export default Item;
