import React from 'react';


const Item = ({ product }) => {
  return (
    <div className="item-card">
      <div className="img-container">
        <img src={product.img} alt={product.titulo} />
      </div>
      <p>Nombre: {product.titulo}</p>
      <p>Descripcion: {product.descripcion}</p>
      <p>Precio: {product.precio}</p>
    </div>
  );
};
  
  export default Item;
