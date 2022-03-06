import React, { useEffect, useState } from 'react';
import ImageListMain from '../../components/ImageListMain/ImageListMain';
import Item  from '../../components/Item/Item';
import { getFirestore } from '../../firebase';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import PreLoader from '../../components/PreLoader/PreLoader';
import { useNavigate } from 'react-router-dom';
import './Inicio.css'

const Home = () => {

  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);
  const goTo = useNavigate();

  useEffect (() => {
    const db = getFirestore();
    const productsCollection = db.collection('catalogo').where('categoria', '==', "combo");
    
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
    }
    getCombos(); 
  }, []);

    if(cargando){
      return <PreLoader/>
    } else if(errores){
      return  goTo(`/error`)
    } else {
     return ( <div className='main-content'>
    <div className='index-page-content'> 
    <div className='main-naranjita'>
      <div className='container-naranjita'>       
          <Player  autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_weytz1ra.json" style={{height: '435px', width: '500px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
      </div>
    </div>   
  
    <div className='main-categorías'>
      <div className='container-categorías'>
      <h3>CATEGORÍAS</h3>
        <ImageListMain/>
      </div>

    </div>    
    
    <div className='main-faq'>
      <div className='container-faq'>
        <div className='text-faq'>¿SABÉS QUE NECESITÁS PARA ALQUILAR CON NARANJITA RENTAL?
          
        </div>
        <div >
          <button className='btn-faq' onClick = { () => goTo(`/requisitos`)}>REQUISITOS Y PREGUNTAS FRECUENTES</button>
          </div>
      </div>
    </div>    
    <div className='main-destacados' >
      <h3>COMBOS DESTACADOS</h3>
      <div className='item row'>
        
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
      
    </div>
  </div>
  </div>)
    }
  }

export default Home;
