import React  from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css'
import { useNavigate } from 'react-router-dom';
import ConfirmarReserva from '../ConfirmarReserva/ConfirmarReserva';
import DeleteIcon from '@mui/icons-material/Delete';





const Carrito = () => {
  
  const {carrito, borrarItem, borrarCarrito, cantidadCarrito} = useCarrito();
  const goTo = useNavigate();
  
  const getTotal = (carrito) => {
    let total = 0;
    carrito.forEach((el) => {
      total += el.item.precio * el.cantidad;
    });
    return total;
  };
  
  
  return <div className='container'>
          
          
          <div className ='row '>
            
              {carrito.length === 0 &&
              <div  className='col-sm-9 p-3 justify-content-center'>
                <h2>El carrito está vacío</h2>
                <p className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</p>
              </div>
              }
             {carrito.length !==0 && <div className='center-row'>
              <div className='reserva-form'><ConfirmarReserva/></div>
              
             
            <div className="main-contents col">
            <h2>CARRITO</h2>
            <div className='main-carrito'>
            <table  >
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
                      <td><p className="mb-1" style= {{display: 'flex', flexWrap: 'wrap', margin: '2em'}}>{compra.item.titulo}</p></td>
                      <td>${compra.item.precio} </td>
                      <td>{compra.cantidad}</td>
                      <td> <button onClick= {()=>borrarItem(compra.item.id)} className="btn btn-danger btn-sm mb-1" ><DeleteIcon></DeleteIcon></button></td>
                    </tr>))}
                              
                              
                   
                  </tbody>
   
            </table>
            <div>
            <div className='details-carrito'> 
            <hr></hr>                   
                <p>Items totales:<strong> {cantidadCarrito}</strong></p>             
                <p>Cotización total: <strong>${getTotal(carrito).toLocaleString()}</strong></p>
            </div>
            <hr></hr>   <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <div type="button" onClick={borrarCarrito} className=" btn-details btn-sm">VACIAR CARRITO <DeleteIcon></DeleteIcon></div>
            </div>
            </div>
            </div>
            <div>
            
            </div>
           
               </div>
            </div>
            }
          </div>
        
          </div>
}
export default Carrito;


