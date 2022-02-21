import React from 'react';
import './ItemList.css'
import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import Item  from '../Item/Item'
import { useParams, useNavigate } from 'react-router-dom';
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
  const {categoria} = useParams();
  const goTo = useNavigate();


  useEffect (() => {
    const db = getFirestore();
    let productsCollection;
    
    switch(categoria) {
      case "camara":
        productsCollection = db.collection('catalogo').where('categoria', '==', "camara")
        break;
      case "accesorios":
        productsCollection = db.collection('catalogo').where('categoria', '==', "accesorios")
        break;
      case "sonido":
        productsCollection = db.collection('catalogo').where('categoria', '==', "sonido")
        break;
      case "iluminacion":
        productsCollection = db.collection('catalogo').where('categoria', '==', "iluminacion")
        break;
      case "estabilizadores":
        productsCollection = db.collection('catalogo').where('categoria', '==', "estabilizadores")
        break;
      
      default:
        productsCollection = db.collection('catalogo')
    }

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
    getCatalogo() }, [categoria]);

    if(cargando){
      return <div>{CircularIndeterminate()}</div>
    } else if(errores){
      return  goTo(`/*`)
    } else {
     return  <div>
       {categoria === "sonido" &&
       <h1>SONIDO</h1>}
       {categoria === "accesorios" &&
       <h1>ACCESORIOS</h1>}
       {categoria === "iluminacion" &&
       <h1>ILUMINACIÓN</h1>}
       {categoria === "estabilizadores" &&
       <h1>ESTABILIZADORES</h1>}
       {categoria === "camara" &&
       <h1>CÁMARA</h1>}
       {!categoria}
     <div className='item row'>
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
    };
};

export default ItemList;
