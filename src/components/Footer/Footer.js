import React from 'react'
import './Footer.css';
import LogoNaranjita from '../../img/naranjitaRental.png'



function NavBar() {
    return (
        <nav className='footer-menu'>
        <div className='block-pad'>
                <img className='fotoMarcas col-12 col-6 col-3' src='https://i.postimg.cc/W3C8hDvt/Logos-marcas.png' alt='naranjita-rental-logo'></img>
            <div>
                <div className='row'>
                    <div className='brand'>
                        <div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/>
                    </div>
                    <div className='block-footer col-3'>
                        <h5>CONTACTO</h5>
                        <p>Audio & Video Equipment Rental</p>
                        <p>Av. Falsa 1234, Belgrano CABA</p>
                        <p>+54 9 11 4466-7788</p>
                        <p>info@naranjita.com.ar</p>
                        <p>L a V de 9 a 19hs. S, D y F de 9 a 12hs</p>
                    </div>
                    <div className='block-footer col-3'>
                        <h6>ALQUILERES</h6>
                        <p>Preguntas Frecuentes</p>
                        
                    </div>
                    <div className=' block-footer col-3'>
                        <h5>PRODUCTOS</h5>
                        <p>Cámara</p>
                        <p>Sonido</p>
                        <p>Estabilizadores</p>
                        <p>Luces</p>
                        <p>Griperia</p>
                        <p>Accesorios</p>
                    </div>
                    <div className='block-footer col-3'>
                        <h5>SEGUINOS</h5>
                        <div className='block-social'>

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
