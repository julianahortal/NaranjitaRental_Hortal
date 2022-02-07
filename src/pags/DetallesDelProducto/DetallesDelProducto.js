import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetallesDelProducto.css'


const DetallesDelProducto = () => {
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
        <ItemDetail producto={producto}/>
      );
};


export default DetallesDelProducto;
