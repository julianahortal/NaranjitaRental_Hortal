import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
import { useNavigate} from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';


const ItemDetail = ({producto}) => {
  const goTo = useNavigate();
  const {agregarItem} = useCarrito();
  const [counter, setCounter] = useState(0);

  const handleAgregarItem = () => {
    if (counter !== 0){
      agregarItem(producto, counter)
    }
    
  
 }

    return (
        <div>
           <div className="details">
              <div className="big-img">
              <img src={producto.img} alt={producto.titulo}/>
              </div>

              <div className="box">
                <div className="row">
                  <h1>{producto.titulo}</h1>
                </div>
                <p>{producto.descripcion}</p>
                <ItemCount stock= {producto.stock} counter={counter} setCounter={setCounter}/>                
                <button onClick = {handleAgregarItem}>Agregar al carrito</button>
                <button onClick = { () => goTo(`/carrito`)}>Ver carrito</button>
                </div>
                </div>
         
        </div>
      );
};

export default ItemDetail;
