import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState(null);
  const goTo = useNavigate();

  useEffect(() => {
      const catalogo = `http://localhost:3001/catalogo/${id}`;
      setCargando(true);
      const getCatalogo= async() =>{
        try{
          const response = await fetch(catalogo)
          const data = await response.json();
          setProducto(data);
          }catch(error){
            setErrores(error);
          }finally{
          setCargando(false);
          }  
      } 
      getCatalogo();  
      }, [id]);

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
                <ItemCount stock= {producto.stock}/>
                <button onClick = { () => goTo(`/carrito`)}>Ver carrito</button>
                </div>
                </div>
         
        </div>
      );
};

export default ItemDetail;
