import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import './DetallesDelProducto.css'
import { getFirestore } from '../../firebase';


const DetallesDelProducto = () => {
  
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState(null);
  const {idProducto} = useParams();
  
  useEffect (() => {
    const db = getFirestore()
    const productsCollection = db.collection('catalogo').doc(idProducto);
    
    const getCatalogo = async() =>{
      setCargando(true);
      try{
        const response = await productsCollection.get()
        if(!response.exists){
          console.log('No hay productos');
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
      return <p>Cargando...</p>}
      else if (errores){
        return <p>Error</p>
      }
    return (
        <ItemDetail producto={producto}/>
      );
};


export default DetallesDelProducto;
