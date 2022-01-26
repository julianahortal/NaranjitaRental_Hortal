import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import LogoNaranjita from '../../img/naranjitaRental.png'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='menu'>
            <navbrand className='brand'>
                <div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/>
            </navbrand>

            <ul className="link-pages">
                <li><Link to='/'>INICIO</Link></li>
                <li><Link to='/alquiler-de-equipos'>ALQUILER DE EQUIPOS</Link></li>
                <li><Link to='/nosotros'>NOSOTROS</Link></li>
                <li><Link to='/requisitos'>REQUISITOS</Link></li>                
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar
