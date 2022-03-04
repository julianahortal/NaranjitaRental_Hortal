import React from 'react';
import './ItemList.css'
import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import Item  from '../Item/Item'
import {useNavigate, Link } from 'react-router-dom';
import PreLoader from '../PreLoader/PreLoader';



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
      return <PreLoader/>
    } else if(errores){
      return  goTo(`/error`)
    } else {
     return <div>
     <div className="page-title text-center color-scheme-light" /*style={{backgroundImage:`url(${Nosotros})`}}*/ >			
     <div className="container">
       <div className="row">
         <div className="col">
           <div className="block-header">
             <h1 className="title">Todos los equipos</h1>
           </div>
         <div className="block-breadcrumbs">
         <Link to='/' className="kapee-breadcrumb">Inicio/</Link><span className="delimiter-sep forward-slash"></span><span className="last"><strong>Equipos</strong></span></div>				
         </div>
       </div>
     </div>
     </div>
     <div className='item row'>
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
      </div>
  
    };
};

export default ItemList;
