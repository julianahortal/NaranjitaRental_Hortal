import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import LogoNaranjita from '../../img/naranjitaRental.png'

function NavBar() {
    return (
        <nav className='menu'>
            <navbrand className='brand'>
                <div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/>
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
