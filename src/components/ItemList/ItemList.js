import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css'
import { useEffect, useState } from 'react';

import { Spinner } from 'reactstrap';
import Item  from '../Item/Item'

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);
  


  useEffect (() => {
    const catalogo = 'http://localhost:3001/catalogo';
    setCargando(true);
    const getCatalogo= async() =>{
      try{
        const response = await fetch(catalogo)
        const data = await response.json();
        setProductos(data);
        }catch(error){
          setErrores(error);
        }finally{
        setCargando(false);
        }    
    }
    getCatalogo();
    }, []);

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
