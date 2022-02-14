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
  const {id} = useParams();
  
  useEffect (() => {
    const db = getFirestore().collection('productos').doc(id);
    const getCatalogo = async() =>{
      setCargando(true);
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

  if (cargando){
      return <p>Cargando...</p>}
      else if (errores){
        return <p>Error</p>
      }
    return (
        <ItemDetail key={producto} producto={producto}/>
      );
};


export default DetallesDelProducto;
