import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import LogoNaranjita from '../../img/naranjitaRental.png'
import { Link, useNavigate } from 'react-router-dom';
import {Menu, MenuList, MenuButton, MenuItem} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import './NavBar.css';



function NavBar() {
    const goTo = useNavigate();
    return (
        <nav className='menu'>
            <div>
            <Link to='/'><div style={{backgroundImage:`url(${LogoNaranjita})`}} className='brand'/></Link>
            </div>
            <ul className="link-pages">
                <li><Link to='/'>INICIO</Link></li>
                
                <li><Menu >
                <MenuButton>ALQUILER DE EQUIPOS<span aria-hidden>▾</span></MenuButton>
                    <MenuList >
                        <MenuItem onSelect={() => {goTo('categorias/camara')}}>CÁMARA</MenuItem>
                        <MenuItem onSelect={() => {goTo('categorias/lentes')}}>LENTES</MenuItem>
                        <MenuItem onSelect={() => {goTo('categorias/sonido')}}>SONIDO</MenuItem>
                        <MenuItem onSelect={() => {goTo('categorias/iluminacion')}}>ILUMINACIÓN</MenuItem>
                        <MenuItem onSelect={() => {goTo('categorias/estabilizadores')}}>ESTABILIZADORES Y TRÍPODES </MenuItem>
                        <MenuItem onSelect={() => {goTo('categorias/accesorios')}}>ACCESORIOS</MenuItem>
                        <MenuItem onSelect={() => {goTo('alquiler-de-equipos')}}>TODOS LOS EQUIPOS</MenuItem>
                    </MenuList>
                </Menu></li>
                
                <li><Link to='/nosotros'>CONTACTO</Link></li>
                <li><Link to='/requisitos'>REQUISITOS/FAQ</Link></li>
                          
            </ul>
            <Link to='/carrito'><CartWidget /></Link>
        </nav>
    );
}

export default NavBar
