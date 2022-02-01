import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState();
    const [cargando, setCargando] = useState(false);
    const [errores, setErrores] = useState(null);
  
    useEffect(() => {
        const catalogo = `http://localhost:3001/catalogo/${id}`;
        setCargando(true);
        const getCatalogo= async() =>{
          try{
            const response = await fetch(catalogo)
            const data = await response.json();
            setProducto(data);
            }catch(error){
              setErrores(error);
            }finally{
            setCargando(false);
            } getCatalogo();   
        } 
        }, [id]);
  
    if (cargando){
        return <p>Cargando...</p>;}
        else if (errores){
          return <p>Error</p>;
        }else{
            return <div>
                <Link to={`/catalogo/${id}`}><ItemDetail producto={producto}/></Link>
                </div>;
        }
};

export default ItemDetailContainer;
