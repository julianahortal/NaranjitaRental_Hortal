import React from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';



const Carrito = () => {
  const {carrito, agregarItem, borrarItem, borrarCarrito} = useCarrito();
  const goTo = useNavigate();
  
  return <div className='container'>
          <h1>CARRITO</h1>
          
          <div className ='row justify-content-center'>
          <div className='col-sm-9 p-3'>
            {carrito.length === 0 &&
            <div>
              <h2>El carrito está vacío</h2>
              <p className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</p>
            </div>
            }
          {carrito.length !==0 &&
          carrito.map((compra) => (
            <div className='col-sm-9 p-3 main-carrito' key={compra.item.id}>
                <div className="row" >
                  <div className="col-sm-2 p-2">
                    <img alt={compra.item.titulo} src={compra.item.img}  className="img-fluid"/>
                  </div>
                  <div className="col-sm-4 p-2">
                    <h5 className="mb-1">{compra.item.titulo}</h5>
                    <p className="mb-1">Precio por jornada: ${compra.item.precio} </p>
                  </div>
                  <div className="col-sm-2 p-2 text-center ">
                    <p className="mb-0">Cantidad: {compra.item.cantidad}</p>
                  </div>
                        
                        <div className="col-sm-4 p-2 text-right">
                          <button onClick={agregarItem}className="btn btn-primary btn-sm mr-2 mb-1"><AddIcon></AddIcon>
                            
                            </button>
                            <button onClick= {()=>borrarItem(compra.item.id)} className="btn btn-danger btn-sm mb-1" ><RemoveCircleRoundedIcon></RemoveCircleRoundedIcon>
                            
                          </button>
                        </div>
                      </div>
              </div>
          ))}
              </div>
            {carrito.length !==0 && <div className="col-sm-3 p-3 main-carrito">
              <div className="card card-body">
                <p className="mb-1">Items totales</p>
                <h4 className=" mb-3 ">{carrito.length}</h4>
                <p className="mb-1">Cotización Total</p><h3 className="m-0 txt-right">p</h3>
                <hr className="my-4"/><div className="text-center"><button type="button" className="btn btn-primary mb-2">RESERVAR</button>
                <button type="button" onClick= {borrarCarrito} className="btn btn-outlineprimary btn-sm">BORRAR CARRITO</button>
                </div></div></div> }
            </div>
            </div>
};

export default Carrito;


