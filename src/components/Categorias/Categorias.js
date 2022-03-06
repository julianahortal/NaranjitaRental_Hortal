import { React, useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Item  from '../Item/Item'
import './Categorias.css'
import PreLoader from '../PreLoader/PreLoader';



const Categorias = () => {
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
      case "lentes":
      productsCollection = db.collection('catalogo').where('categoria', '==', "lentes")
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
      return <PreLoader/>
    } else if(errores){
      return  goTo(`/error`)
    } else {
     return  <div>

        <div className="page-title text-center color-scheme-light" >			
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="block-header">
                    <h1 className="title">{categoria}</h1>
                  </div>
                <div className="block-breadcrumbs">
                <Link to='/' className="kapee-breadcrumb">Inicio/</Link><span className="delimiter-sep forward-slash"></span><span className="last"><strong>{categoria}</strong></span></div>				
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

export default Categorias;
