import React from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css'

const Carrito = () => {
  const {carrito} = useCarrito();
  return <div>
          <h1>CARRITO</h1>
          {carrito.map((compra) => (
            
            <div>
              <div className="indItem" key={compra.item.id}>
              <img className="img-item"src={compra.item.img} /> <br/>
                <h3>{compra.item.titulo}</h3> <br/>
                <h4>${compra.item.precio}</h4>
                
                <p>{compra.cantidad}</p>
                </div>
            </div>
          ))
          }
          
          
          </div>;
};

export default Carrito;
