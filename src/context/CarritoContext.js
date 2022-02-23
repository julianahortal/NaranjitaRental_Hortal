
import { createContext, useContext, useState, useEffect } from 'react';

export const CarritoContext = createContext([]);

export const CarritoProvider = ({children}) => { 
 
  const [carrito, setCarrito] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    
    const getCantidad = () => {
      let cantidad = 0;
      carrito.forEach((compra) => {
        cantidad += compra.cantidad;
      });
      setCantidadCarrito(cantidad);
    };
    getCantidad();
  }, [carrito]);
  
  const agregarItem = (item, cantidad) => {
   const itemEnCarrito = carrito.find((compra)=> compra.item.id === item.id);

    if (itemEnCarrito){
      const actualizarCarrito=  carrito.map((compra)=>{
        if(compra.item.id === item.id){
          return  {...compra, cantidad: cantidad += compra.cantidad }
          }else {
            return compra;
          }
      })
      setCarrito(actualizarCarrito)
    }
    else{
      setCarrito((prev)=>[...prev, {item, cantidad}])
    }
  };
  
  const borrarItem = (borrarId) =>
 {setCarrito((state) => state.filter((el => el.item.id !== borrarId)))}
  

  const borrarCarrito = () => {
    setCarrito([]);
  };
  

    return <CarritoContext.Provider value={{ carrito, agregarItem, borrarItem, borrarCarrito, cantidadCarrito}}>{children}</CarritoContext.Provider>
}
//HOOK PARA USAR CARRITOCONTEXT
export const useCarrito = () => useContext(CarritoContext);
