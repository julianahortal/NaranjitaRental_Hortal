
import React, { useEffect, useState } from 'react';
import ImageListMain from '../../components/ImageListMain/ImageListMain';
import { getFirestore } from '../../firebase';
import Item  from '../../components/Item/Item';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Inicio.css'


export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}


const Home = () => {
  AOS.init();
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect (() => {
    const db = getFirestore();
    const productsCollection = db.collection('catalogo').where('categoria', '==', "combo")
    
    const getCombos = async() =>{
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
    getCombos() }, []);

    if(cargando){
      return <div>{CircularIndeterminate()}</div>
    } else if(errores){
      return  <div></div>
    } else {
     return ( <div className='main-content'>
    <div className='index-page-content'>
    <div className='main-naranjita'>
      <div className='container-naranjita'>
        <h1>NARANJITA RENTAL</h1>
        <h2>ALQUILER DE EQUIPOS PARA CINE Y FOTOGRAFÍA</h2>
      </div>
    </div>    
    <div className='main-destacados' data-aos="zoom-out-up">
      <h3>COMBOS DESTACADOS</h3>
      <div className='item row'>
        
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
      
    </div>
    <div className='main-categorías'data-aos="zoom-out-up">
      <div className='container-categorías'>
      <h3>CATEGORÍAS</h3>
        <ImageListMain/>
      </div>

    </div>    
    <div className='main-faq'>
      <div className='container-faq'></div>
    </div>    
  </div>
  </div>)
    }
  }

export default Home;
