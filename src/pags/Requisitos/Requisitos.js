import React from 'react';
import bannerRequisitos from '../../img/equip-rental-1920x700-1.png'
import './Requisitos.css'
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Requisitos = () => {
	

  return <div>

    <div id="page-title" className="page-title text-center title-size-default color-scheme-light" style={{backgroundImage:`url(${bannerRequisitos})`}} >			
	<div className="container">
		<div className="row">
			<div className="col">
				<div className="block-header">
					<h1 className="title">Requisitos</h1>
				</div>
			<div className="block-breadcrumbs">
			<Link to='/' className="kapee-breadcrumb">Home/</Link><span className="delimiter-sep forward-slash"></span><span className="last"><strong>Requisitos</strong></span></div>				
			</div>
		</div>
	</div>
</div>
<container className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='"content-area col-md-12"'>
            <article>
              <div className='heading-wrap'>
                <h4 className="heading-title">Reglamento y Requisitos Básicos para el Alquiler </h4>
              </div>

              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recomendaciones o referencias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <strong>Para poder alquilar equipos en Naranjita Rental,</strong> en primera instancia se deben aportar <strong>datos personales y laborales,</strong> tener alguna <strong>recomendación directa</strong> o <strong>referencia laboral / comercial</strong> previa con nosotros, o de la empresa a la que pertenezcan y/o con algún <strong>cliente de nuestra confianza</strong> y/o con algún <strong>colega del rubro</strong> al que ya le hayan alquilado antes, y/o de alguna <strong>institución educativa</strong> a la que pertenezcan como estudiantes en cursada, o como docentes u otro cargo en la misma, en caso de contar con <strong>todos</strong> los elementos necesarios para superar los controles administrativos requeridos podrán ser ingresados como clientes nuevos y proseguiremos con los pasos de alquiler, de otra manera <strong>Naranjita Rental se reserva el derecho de rechazar y/o cancelar</strong> las reservas (si es que estas existieran previamente) y <strong>no avanzar</strong> con las mismas hasta no se puedan cumplir con los <strong>requisitos básicos de confiabilidad comercial.</strong><br/>
          <div>
            <span>Específicamente para <strong>ESTUDIANTES</strong>, se puede alquilar con <strong>DNI</strong>, <strong>LIBRETA</strong> o <strong>CREDENCIAL</strong> que los acredite como tal y <strong>SERVICIO</strong> a su nombre o de un familiar directo.</span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Disponibilidad y reserva de equipos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Para&nbsp;<strong>reservar</strong>&nbsp;los equipos se&nbsp;<strong>confirma disponibilidad</strong>&nbsp;previamente por teléfono, si existe,&nbsp;<strong>FDM</strong>&nbsp;dejará en standby el equipo hasta que se<strong>&nbsp;refuerce la reserva con una seña</strong>&nbsp;del&nbsp;<strong>50%</strong>&nbsp;del total del alquiler como mínimo, dicha seña podrá abonarse en las oficinas de&nbsp;<strong>FDM en Caballito o por transferencia bancaria.</strong>&nbsp;En caso de&nbsp;<strong>cancelarse o modificarse</strong>&nbsp;la reservación con una anticipación<strong>&nbsp;menor a 24hs</strong>,&nbsp;<strong>no se hará devolución de la misma.</strong>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        > 
          <Typography>Retiros, devoluciones y extensión de jornada</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Los equipos se&nbsp;<strong>retiran y/o devuelven</strong>&nbsp;a la&nbsp;<strong>hora convenida</strong>&nbsp;en la reservación (con tolerancia de +/-&nbsp; 1/2 hora), y&nbsp;<strong>si o si</strong>&nbsp;en las instalaciones de&nbsp;<strong>Naranjita Rental&nbsp;</strong>&nbsp;(salvo casos excepcionales convenidos con anterioridad por conveniencia de ambas partes) en caso de&nbsp;<strong>extenderse</strong>&nbsp;la jornada se debe dar previo aviso y se<strong>&nbsp;re calculara</strong>&nbsp;el total del alquiler con un&nbsp;<strong>extra proporcional</strong>&nbsp;por hora del precio convenido por jornada.</Typography>
          </AccordionDetails>
        
      </Accordion>

            </article>
          </div>
        </div>
      </div>
    </container>
    
    <div>

    </div>
    
    </div>;
};

export default Requisitos;
