import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pags/Inicio/Inicio';
import Nosotros from './pags/Nosotros';
import AlquilerDeEquipos from './pags/AlquilerDeEquipos/AlquilerDeEquipos';
import Requisitos from './pags/Requisitos'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DetallesDelProducto from './pags/DetallesDelProducto/DetallesDelProducto';
import Carrito from './pags/Carrito/Carrito';
import { CarritoProvider } from './context/CarritoContext';

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
                <Route path=":id" element={<DetallesDelProducto/>}/>
                <Route path="categoria/:idCategoria" element={<AlquilerDeEquipos/>}/>              
            </Route>
            <Route path="requisitos" element={<Requisitos/>}/>
            <Route path="carrito" element ={<Carrito/>}/>
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </CarritoProvider>
    </div>
  );
}


export default App;
