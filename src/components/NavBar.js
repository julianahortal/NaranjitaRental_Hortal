import React from 'react'
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className='menu'>
            <navbrand className='brand'>
                <logo></logo>
                <h1>Naranjita Rental</h1>
            </navbrand>
            
            <ul className="link-pages">
                <li>Inicio</li>
                <li>Alquiler de equipos</li>
                <li>Nosotros</li>
                <li>Requisitos</li>
            </ul>
        </nav>
    )
}

export default NavBar
