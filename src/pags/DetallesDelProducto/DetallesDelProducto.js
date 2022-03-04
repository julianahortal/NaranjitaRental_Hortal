import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetallesDelProducto.css'
import { getFirestore } from '../../firebase';
import PreLoader from '../../components/PreLoader/PreLoader'


const DetallesDelProducto = () => {
  
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState(null);
  const {idProducto} = useParams();
  const goTo = useNavigate() ;
  
  useEffect (() => {
    const db = getFirestore()
    const productsCollection = db.collection('catalogo').doc(idProducto);
    
    const getCatalogo = async() =>{
      setCargando(true);
      try{
        const response = await productsCollection.get()
        if(!response.exists){
          goTo(`/error`)
        }
        setProducto({...response.data(), id: response.id});
        }catch(errores){
        setErrores(errores);
        }finally{
        setCargando(false);
      }  
    }
    getCatalogo() }, [idProducto]);

  if (cargando){
      return <PreLoader/>}
      else if (errores){
        return <p>Error</p>
      }
    return (
        <ItemDetail producto={producto}/>
      );
};


export default DetallesDelProducto;
