import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pags/Inicio';
import Nosotros from './pags/Nosotros';
import AlquilerDeEquipos from './pags/AlquilerDeEquipos';
import Requisitos from './pags/Requisitos'
import NavBar from './components/NavBar/NavBar';
import DetallesDelProducto from './pags/DetallesDelProducto';

function App() {

  return ( <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/">
            <Route index element={<Inicio/>}/>
            <Route path="nosotros" element={<Nosotros/>}/>
            <Route path="alquiler-de-equipos">
              <Route index element={<AlquilerDeEquipos/>}/>
              <Route path=":id" element={<DetallesDelProducto/>}/>
            </Route>
            <Route path="requisitos" element={<Requisitos/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
    </div>
  );
}


export default App;
