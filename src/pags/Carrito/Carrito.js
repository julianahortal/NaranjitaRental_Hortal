import React, { useState}  from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css'
import { useNavigate } from 'react-router-dom';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import ConfirmarReserva from '../ConfirmarReserva/ConfirmarReserva';





const Carrito = () => {
  
  const {carrito, borrarItem, borrarCarrito, cantidadCarrito} = useCarrito();
  const [mostrarElemento, setMostrarElemento] = useState(null)

  const handleMostrar = () => setMostrarElemento(true)

 

  
  const goTo = useNavigate();
  
  const getTotal = (carrito) => {
    let total = 0;
    carrito.forEach((el) => {
      total += el.item.precio * el.cantidad;
    });
    return total;
  };
  
  
  return <div className='container'>
          <h1>CARRITO</h1>
          
          <div className ='row '>
            
              {carrito.length === 0 &&
              <div  className='col-sm-9 p-3 justify-content-center'>
                <h2>El carrito está vacío</h2>
                <p className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</p>
              </div>
              }
              {carrito.length !==0 && <div className='col'>
              
                <table className='main-carrito' >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carrito.map((compra) => (<tr key={compra.item.id}>
                      <td><img alt={compra.item.titulo} src={compra.item.img}  className="img-fluid"/></td>
                      <td><h5 className="mb-1">{compra.item.titulo}</h5></td>
                      <td>${compra.item.precio} </td>
                      <td>{compra.cantidad}</td>
                      <td> <button onClick= {()=>borrarItem(compra.item.id)} className="btn btn-danger btn-sm mb-1" ><RemoveCircleRoundedIcon></RemoveCircleRoundedIcon></button></td>
                    </tr>))}
                    </tbody>
              </table>
               
              <div className="main-content col">
                  <div className="card card-body">
                    <p className="mb-1">Items totales</p>
                    <h4 className=" mb-3 ">{cantidadCarrito}</h4>
                    <p className="mb-1">Cotización Total</p><h3 className="m-0 txt-right">${getTotal(carrito)}</h3>
                    <hr className="my-4"/><div className="text-center"><button type="button" onClick = {handleMostrar} className="btn btn-primary mb-2">RESERVAR</button>
                    <button type="button" onClick= {borrarCarrito} className="btn btn-outlineprimary btn-sm">BORRAR CARRITO</button>
                    </div></div></div>
              </div>
              }
              { mostrarElemento  && <div className="row-2" >
                <ConfirmarReserva/> </div>
              }
            </div>
          </div>
        
};

export default Carrito;


