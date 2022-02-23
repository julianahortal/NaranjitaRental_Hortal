import React from 'react';
import './ItemList.css'
import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import Item  from '../Item/Item'
import {useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}


const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);
  const goTo = useNavigate();


  useEffect (() => {
    const db = getFirestore();
    let productsCollection = db.collection('catalogo')
    

    const getCatalogo = async() =>{
      setCargando(true);
      try{
        const response = await productsCollection.get()
        if(response.empty){
          console.log('No hay productos')
        }
        setProductos(response.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }catch(error){
        setErrores(error);
      }finally{
      setCargando(false);
      }    
    };
    getCatalogo() }, []);

    if(cargando){
      return <div>{CircularIndeterminate()}</div>
    } else if(errores){
      return  goTo(`/*`)
    } else {
     return <div className='item row'>
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
  
    };
};

export default ItemList;
