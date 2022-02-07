import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './AlquilerDeEquipos.css'
import { UncontrolledAccordion, AccordionItem, AccordionHeader } from 'reactstrap';


const AlquilerDeEquipos = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect (() => {
  const getCategorias= async() =>{
    const catalogo = 'http://localhost:3001/catalogo';
      const response = await fetch(catalogo)
      const data = await response.json();
      setCategorias(data);
        
  }
  getCategorias();
  }, []);
  
     return <div >
      
        <h1>alquiler de equipos</h1>
        <div className='container-catalogo'>
          <aside className='col-12 col-md-4 col-lg-3 col-xl-3'>
            <div className='sidebar'>
            <div>
              <UncontrolledAccordion defaultOpen="0">
                  <AccordionHeader targetId="0">
                  <h4 className='sidebar-title'>Categoría de Equipos</h4>
                  </AccordionHeader>
                  
                  <ul class="product-categories">
              {categorias.map((categoria) => {return <AccordionItem accordionId="0" key={categoria.tipo} className='cat-item-parent'>{categoria.tipo} <ul key={categoria.marca} className='cat-item-child'>{categoria.marca}</ul></AccordionItem>})}
              </ul>
                  

              </UncontrolledAccordion>
            </div>
              
              
            </div>
          </aside>
          <ItemList/>
        </div>
    </div>
    
};

export default AlquilerDeEquipos;
