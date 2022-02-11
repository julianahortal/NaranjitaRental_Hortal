import React from 'react';

import ItemList from '../../components/ItemList/ItemList';
import './AlquilerDeEquipos.css'



const AlquilerDeEquipos = () => {
     return <div>
      
        <h1>ALQUILER DE EQUIPOS</h1>
        <div className='container-catalogo'>
          <h2></h2> 
          <ItemList/>
        </div>
    </div>
    
};

export default AlquilerDeEquipos;
