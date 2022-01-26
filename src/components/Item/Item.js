import React from 'react';
import './Item.css';

const Item = ({ producto }) => {
  return (
    <div className="item-card ">
      <div className="img-container">
        <img className="img" src={producto.img} alt={producto.titulo} />
      </div>
      <h4>{producto.titulo}</h4>
      <h6>{producto.tipo}, {producto.marca}</h6>
      <p>Precio x jornada: ${producto.precio}</p>
    </div>
  );
};
  
  export default Item;
