import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Nosotros = () => {

  const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!nombre || !telefono || !apellido || !mail || !consulta) {
      return 
    }
    setVisible(!visible);
   
  };

  return <div>

  <div id="page-title" className="page-title text-center title-size-default color-scheme-light" style={{backgroundImage:`url(${Nosotros})`}} >			
<div className="container">
  <div className="row">
    <div className="col">
      <div className="block-header">
        <h1 className="title">NOSOTROS</h1>
      </div>
    <div className="block-breadcrumbs">
    <Link to='/' className="kapee-breadcrumb">Home/</Link><span className="delimiter-sep forward-slash"></span><span className="last"><strong>nosotros</strong></span></div>				
    </div>
  </div>
</div>
</div>
<div className='main-content'>
    <div className='container'>
      <div className='row'>
        <div className='content-area col-md-6'>
        
              <div className='map-left'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8366503355337!2d-58.45492843364318!3d-34.55769106630892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42d373013a5%3A0xa63d8241993ab212!2s3%20de%20Febrero%202263%2C%20C1428%20AHI%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1646519856243!5m2!1ses-419!2sar" width="400" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
            <div className="contact-content">
              <div className='contacto-text'>
                <h3>Contacto</h3> <p>Audio & Video Equipment Rental</p>
                        <p>3 de Febrero 2263, Belgrano CABA</p>
                        <p>+54 9 11 4466-7788</p>
                        <p>info@naranjita.com.ar</p>
                        <p>L a V de 9 a 19hs. S, D y F de 9 a 12hs</p>
                </div>
                {visible && 
             <div className={!visible ?  'element-visible' : null}>
               <div className='resp-ex'>
                  <p><strong>¡Muchas gracias!</strong> Tu consulta fue recibida con éxito.</p><br/>
                  <p>Te responderemos a la brevedad.</p>
                <Player  autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_4x9a2h9p.json" style={{height: '235px', width: '250px' }}>
                  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                </div>
            </div>
            }
                <form className={visible ?  'element-hidden' : null} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" name="nombre"className="form-control" placeholder="Nombre"  onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" name="apellido" id="apellido" className="form-control" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" name="email" className="form-control" id="mail" placeholder="Correo electrónico" onChange={(e) => setMail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono"className="form-label">Teléfono</label>
                  <input type="tel" name="telefono" className="form-control" id="telefono" maxLength="11" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)} required/>
                </div>    
                <div className="mb-3">
                  <label htmlFor="consulta" className="form-label">Consulta</label>
                  <textarea type="text" name="consulta" className="form-control-textarea" id="consulta" placeholder="Escribe tu consulta" onChange={(e) => setConsulta(e.target.value)} required/>
              
                </div>    
                <input type="submit" value="Realizar consulta" id="btn-consulta"  className={visible ?  'element-hidden' : null} />             
                </form>
     
                <div>
               
                  </div>
            </div>
            
            

        </div>
       
        </div>
      </div>
    
  
  <div>

  </div>
  
  </div>;
};

export default Nosotros;
