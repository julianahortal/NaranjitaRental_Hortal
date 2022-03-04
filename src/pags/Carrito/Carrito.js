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
             {carrito.length !==0 && <div className='row'>
              <ConfirmarReserva/>
              
             
            <div className="main-content col">
            <h1>CARRITO</h1>
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
                      <td><p className="mb-1">{compra.item.titulo}</p></td>
                      <td>${compra.item.precio} </td>
                      <td>{compra.cantidad}</td>
                      <td> <button onClick= {()=>borrarItem(compra.item.id)} className="btn btn-danger btn-sm mb-1" ><DeleteIcon></DeleteIcon></button></td>
                    </tr>))}
                              
                              
                    <tr>                    
                      <td>Items totales:</td>
                      <td>{cantidadCarrito}</td>
                    </tr>
                    <tr>                    
                      <td>Cotización total:</td>
                      <td>${getTotal(carrito).toLocaleString() }</td>
                    </tr>
                  </tbody>
                  <tfoot>
                 
                  
                  
                  <tr> <div type="button" onClick= {borrarCarrito} className=" btn-outlineprimary btn-sm">BORRAR CARRITO</div></tr>
                  </tfoot>   
            </table>
               </div>
            </div>
            }
          </div>
        
          </div>
}
export default Carrito;


