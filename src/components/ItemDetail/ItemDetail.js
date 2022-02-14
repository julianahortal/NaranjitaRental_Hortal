import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
import { useNavigate, useParams} from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';
import { useEffect } from 'react';
import { getFirestore } from '../../firebase';


const ItemDetail = () => {
  
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState(null);
  const [counter, setCounter] = useState(0);
  const {carrito, agregarItem} = useCarrito();
  const {id} = useParams();
  const goTo = useNavigate();
  
  useEffect(() => {
    const db = getFirestore().collection('productos').doc(id);
    setCargando(true);
    const getCatalogo = async() =>{    
      try{
        const response = await db.get()
        if(response.empty){
          console.log('No hay productos');
        }
        setProducto({...response.data(), id:response.id});
        }catch(errores){
        setErrores(console.log("Error", errores));
        }finally{
        setCargando(false);
      }  
    }
    getCatalogo()}, [id]);
   
  
  const handleAgregarItem = () => {
    if (counter !== 0){
      agregarItem(producto, counter)
    }
  }
  
  if (cargando){
    return <p>Cargando...</p>;}
  else if (errores){
    return <p>Error</p>;
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
                { carrito.length !== 0 && 
                <button onClick = { () => goTo(`/carrito`)}>Ver carrito</button>
                }               
                </div>
                </div>
         
        </div>
      );
};

export default ItemDetail;
