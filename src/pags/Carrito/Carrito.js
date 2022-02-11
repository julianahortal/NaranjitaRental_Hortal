import React from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css'

const Carrito = () => {
  const {carrito} = useCarrito();
  
  return <div className='container'>
          <h1>CARRITO</h1>
          <div className ='row justify-content-center'>
          <div className='col-sm-9 p-3'>
          {carrito.length !=0 &&
          carrito.map((compra) => (
            <div>
                <div className="row prodItem" key={compra.item.id}>
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
                          <button className="btn btn-primary btn-sm mr-2 mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </button>
                          <button className="btn btn-danger btn-sm mb-1" >
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                          </button>
                        </div>
                      </div>
              </div>
          ))}
              </div>
            {carrito.length !=0 && <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Items totales</p>
                <h4 className=" mb-3 txt-right">c</h4>
                <p className="mb-1">Cotización Total</p><h3 className="m-0 txt-right">p</h3>
                <hr className="my-4"/><div className="text-center"><button type="button" className="btn btn-primary mb-2">RESERVAR</button>
                <button type="button" className="btn btn-outlineprimary btn-sm">BORRAR CARRITO</button>
                </div></div></div> }
            </div>
            </div>
};

export default Carrito;


