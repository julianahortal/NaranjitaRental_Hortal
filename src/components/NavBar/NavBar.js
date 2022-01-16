import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar() {
    return (
        <nav className='menu'>
            <navbrand className='brand'>
                
                <h1>NARANJITA RENTAL</h1>
            </navbrand>

            <ul className="link-pages">
                <li>INICIO</li>
                <li>ALQUILER DE EQUIPOS</li>
                <li>NOSOTROS</li>
                <li>REQUISITOS</li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar
