import {useEffect, useState} from 'react';
import Item from "../Item";

const ItemList = ({producto}) => {

  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [cargando, setCargando] = useState(false);
  


  useEffect (() => {
    const catalogo = 'http://localhost:3001/catalogo';
    setCargando(true);
    const getCamaras = async() =>{
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
    getCamaras();
    }, []);

    if(cargando){
      return
    } else if(errores){
    } else {
      <div>
      <ul>
        {productos.map((producto) => {
          return <Item key={producto.id} product={producto} />;
        })}
      </ul>
    </div>
    };
    

 
    
};

export default ItemList;
