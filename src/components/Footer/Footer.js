import React from 'react'
import './Footer.css';
import LogoNaranjita from '../../img/naranjitaRental.png'
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



function NavBar() {
    const goTo = useNavigate();
    return (
        <nav className='footer-menu'>
        <div className='block-pad'>
                <img className='fotoMarcas col-12 col-6 col-3' src='https://i.postimg.cc/W3C8hDvt/Logos-marcas.png' alt='naranjita-rental-logo'></img>
            <div>
                <div className='row'>
                    <div >
                        <div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/>
                    </div>
                    <div className='block-inline'>
                    <div className='block-footer col-3'>
                        <h5>CONTACTO</h5>
                        <p>Audio & Video Equipment Rental</p>
                        <p>3 de Febrero 2263, Belgrano CABA</p>
                        <p>+54 9 11 4466-7788</p>
                        <p>info@naranjita.com.ar</p>
                        <p>L a V de 9 a 19hs. S, D y F de 9 a 12hs</p>
                    </div>
                    <div className='block-footer col-3'>
                        <h5>ALQUILERES</h5>
                        <p className='links-footer'  onClick = { () => goTo('/requisitos')}>Preguntas Frecuentes</p>
                        
                    </div>
                    <div className=' block-footer col-3'>
                        <h5>PRODUCTOS</h5>
                        <p className='links-footer' onClick = { () => goTo('categorias/camara')}>Cámara</p>
                        <p className='links-footer' onClick = { () => goTo('categorias/lentes')}>Lentes</p>
                        <p className='links-footer' onClick = { () => goTo('categorias/sonido')}>Sonido</p>
                        <p className='links-footer' onClick = { () => goTo('categorias/iluminacion')}>Iluminación</p>
                        <p className='links-footer' onClick = { () => goTo('categorias/estabilizadores')}>Estabilizadores y trípodes </p>                        
                        <p className='links-footer' onClick = { () => goTo('categorias/accesorios')}>Accesorios</p>
                        
                    </div>
                    <div className='block-footer col-3'>
                        <h5>SEGUINOS</h5>
                        <div className='block-social'>
                            <div className='social-row'>
                            <FacebookIcon/>
                            <p>/naranjita-rental</p>
                            </div>
                            <div className='social-row'>
                            <InstagramIcon/>
                            <p>@naranjita.rental</p>
                            </div>
                            <div className='social-row'>
                            <MailOutlineIcon/>
                            <a href="mailto:naranjita@rental.com?Subject=Cotización"><p>naranjita@rental.com</p></a>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        
           
            <div className="footer-copyright copyright-columns">
                <div className='container'>	
                    <div className='row copyright-wrap'>
                        <div className='text-left reset-mb-10 col-12 col-md-6'>
                            © 2022 Naranjita Rental — Belgrano · CABA · Argentina					
                        </div>
                    </div>
                </div>
		    </div>
        </div>

            
            
        </nav>
    );
}

export default NavBar
