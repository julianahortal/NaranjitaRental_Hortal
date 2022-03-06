
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Inicio from './pags/Inicio/Inicio';
import Nosotros from './pags/Nosotros/Nosotros';
import AlquilerDeEquipos from './pags/AlquilerDeEquipos/AlquilerDeEquipos';
import Requisitos from './pags/Requisitos/Requisitos'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DetallesDelProducto from './pags/DetallesDelProducto/DetallesDelProducto';
import Carrito from './pags/Carrito/Carrito';
import NotFound from "./pags/NotFound/NotFound";
import ConfirmarReserva from './pags/ConfirmarReserva/ConfirmarReserva';
import ReservaHecha from './pags/ReservaHecha/ReservaHecha';
import Categorias from './components/Categorias/Categorias';

function App() {

  return ( <div className="App">
    <CarritoProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/">
            <Route index element={<Inicio/>}/>
            <Route path="nosotros" element={<Nosotros/>}/>
            <Route path="alquiler-de-equipos">
              <Route index element={<AlquilerDeEquipos/>}/>                                                              
                <Route path=":idProducto" element={<DetallesDelProducto/>}/>                                                                            
            </Route>
            <Route path="categorias/:categoria" element={<Categorias/>}> 
            </Route>
            <Route path="requisitos" element={<Requisitos/>}/>
            <Route path="carrito">
              <Route index element ={<Carrito/>}/>
                <Route path="carrito/checkout" element ={<ConfirmarReserva/>}/>
            </Route>
            <Route path="confirm/:orderId" element={<ReservaHecha/>} />      
            <Route path="error" element={<NotFound/>} />
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </CarritoProvider>
    </div>
  );
}


export default App;
