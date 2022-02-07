import React from 'react'
import './Footer.css';
import LogoNaranjita from '../../img/naranjitaRental.png'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='footer-menu'>
            <navbrand className='brand'>
            <Link to='/'><div style={{backgroundImage:`url(${LogoNaranjita})`}} className='logo'/></Link>
            </navbrand>
            <div className='col-xs-12 col-sm-6 col-lg-3'>
                <p>Audio & Video Equipment Rental</p>
                <p>Av. Falsa 1234, Belgrano CABA</p>
                <p>+54 9 11 4466-7788</p>
                <p>info@naranjita.com.ar</p>
                <p>L a V de 9 a 19hs. S, D y F de 9 a 12hs</p>
            </div>
            <div class="footer-copyright copyright-columns">
			<div className='container'>	
				<div className='row copyright-wrap'>
					<div className='text-left reset-mb-10 col-12 col-md-6'>
						© 2022 Naranjita Rental — Belgrano · CABA · Argentina					
                    </div>
				</div>
			</div>
		</div>
            
        </nav>
    );
}

export default NavBar
