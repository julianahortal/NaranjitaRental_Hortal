
import React, { useEffect, useState } from 'react';
import ImageListMain from '../../components/ImageListMain/ImageListMain';
import Item  from '../../components/Item/Item';
import CircularProgress from '@mui/material/CircularProgress';
import AOS from 'aos';
import { Box } from '@mui/material';
import { getFirestore } from '../../firebase';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
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
        
        <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_weytz1ra.json" style={{ height: '400px', width: '400px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
      </div>
    </div>    
    <div className='main-categorías'>
      <div className='container-categorías'>
      <h3>CATEGORÍAS</h3>
        <ImageListMain  data-aos="zoom-in-up"/>
      </div>

    </div>    
    <div className='main-destacados' >
      <h3>COMBOS DESTACADOS</h3>
      <div className='item row' data-aos="zoom-in-up">
        
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
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
