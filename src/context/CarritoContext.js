
import { createContext, useContext, useState } from 'react';

export const CarritoContext = createContext([]);

export const CarritoProvider = ({children}) => { 
 
  const [carrito, setCarrito] = useState([]);
  
  const agregarItem = (item, cantidad) => {
    const newItem = { item, cantidad };
    setCarrito((state) => [...state, newItem]);
  
  };

  const borrarItem = (borrarId) =>
  setCarrito((state) => state.filter(({ id }) => id !== borrarId));

  const borrarCarrito = () => {
    setCarrito(carrito * 0)
  };

    return <CarritoContext.Provider value={{ carrito, agregarItem, borrarItem, borrarCarrito}}>{children}</CarritoContext.Provider>
}
//HOOK PARA USAR CARRITOCONTEXT
export const useCarrito = () => useContext(CarritoContext);
