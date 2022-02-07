
import { createContext, useContext, useState } from 'react';

export const CarritoContext = createContext([]);

export const CarritoProvider = ({children}) => { 
 
  const [carrito, setCarrito] = useState([]);
  
  const agregarItem = (item, cantidad) => {
    const newItem = { item, cantidad };
    setCarrito((prevState) => [...prevState, newItem]);
  };

  const borrarItem = (item, cantidad) => {
    const newItem = { item, cantidad };
    setCarrito((prevState) => [...prevState, newItem]);
  };
  const borrarCarrito = () => {
    setCarrito([...carrito, 0])
  };
    return <CarritoContext.Provider value={{ carrito, agregarItem, borrarItem, borrarCarrito }}>{children}</CarritoContext.Provider>
}

export const useCarrito = () => useContext(CarritoContext);
