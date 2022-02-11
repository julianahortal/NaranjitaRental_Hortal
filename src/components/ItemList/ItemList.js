import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css'
import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import { Spinner } from 'reactstrap';
import Item  from '../Item/Item'
import { useParams } from 'react-router-dom';


const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);
  const {idCategoria} = useParams();

  useEffect (() => {
    const db = getFirestore();
    let productsCollection;
    if (idCategoria) {
      productsCollection = db.collection('productos').where('id', '==', idCategoria)
    } else {
      productsCollection = db.collection('productos')
    }

    const getCatalogo = async() =>{
      setCargando(true);
      try{
        const response = await productsCollection.get()
        if(response.empty){
          console.log('No hay productos')
        }
        setProductos(response.docs.map(doc => ({...doc.data(), id: doc.id})))
      }catch(error){
        setErrores(error);
      }finally{
      setCargando(false);
      }    
    } 
    getCatalogo(), [idCategoria]});

    if(cargando){
      return <div> <Spinner>
      Loading...
    </Spinner></div>
    } else if(errores){
      return <p>Error 404</p>
    } else {
     return <div className='item row'>
      
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      
    </div>
    };
};

export default ItemList;
