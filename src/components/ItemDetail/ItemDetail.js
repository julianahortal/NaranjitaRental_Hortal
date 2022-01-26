import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    
    return (
        <div>
          <h1>{producto.titulo}</h1>
          <img src={producto.img} alt={producto.titulo} />
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <ItemCount/>
        </div>
      );
};

export default ItemDetail;
