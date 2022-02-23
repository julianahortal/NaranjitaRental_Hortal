import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import LogoNaranjita from '../../img/naranjitaRental.png'
import { Link } from 'react-router-dom';
import {Menu, MenuList, MenuButton, MenuItem} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import './NavBar.css';


function NavBar() {
    return (
        <nav className='menu'>
            <div className='brand'>
            <Link to='/'><div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/></Link>
            </div>
            <ul className="link-pages">
                <li><Link to='/'>INICIO</Link></li>
                
                <li><Menu>
                <MenuButton>ALQUILER DE EQUIPOS<span aria-hidden>▾</span></MenuButton>
                    <MenuList>
                        <Link to='categorias/camara'><MenuItem onSelect={() => {}}>CÁMARA</MenuItem></Link>
                        <Link to='categorias/sonido'><MenuItem onSelect={() => {}}>SONIDO</MenuItem></Link>
                        <Link to='categorias/iluminacion'><MenuItem onSelect={() => {}}>ILUMINACIÓN</MenuItem></Link>
                        <Link to='categorias/estabilizadores'> <MenuItem onSelect={() => {}}>ESTABILIZADORES Y TRÍPODES</MenuItem></Link>
                        <Link to='categorias/accesorios'> <MenuItem onSelect={() => {}}>ACCESORIOS</MenuItem></Link>
                        <Link to='/alquiler-de-equipos'><MenuItem onSelect={() => {}}>TODOS LOS EQUIPOS</MenuItem></Link>
                    </MenuList>
                </Menu></li>
                
                <li><Link to='/nosotros'>NOSOTROS</Link></li>
                <li><Link to='/requisitos'>REQUISITOS</Link></li>
                          
            </ul>
            <Link to='/carrito'><CartWidget /></Link>
        </nav>
    );
}

export default NavBar
