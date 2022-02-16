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
  const {idProducto} = useParams();
  const goTo = useNavigate();
  
  useEffect(() => {
    const db = getFirestore()
    const productsCollection = db.collection('catalogo').doc(idProducto);
    setCargando(true);
    const getCatalogo = async() =>{    
      try{
        const response = await productsCollection.get()
        if(response.empty){
          console.log('No hay productos');
        }
        setProducto({...response.data(), id:response.id});
        }catch(err){
        setErrores(err);
        }finally{
        setCargando(false);
      }  
    }
    getCatalogo()}, [idProducto]);
   
  
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
