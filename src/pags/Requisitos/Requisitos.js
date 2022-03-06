import React from 'react';
import './Requisitos.css'
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Requisitos = () => {
	

  return <div>

    <div id="page-title" className="page-title text-center title-size-default color-scheme-light">			
	<div className="container">
		<div className="row">
			<div className="col">
				<div className="block-header">
					<h1 className="title">REQUISITOS/FAQ</h1>
				</div>
			<div className="block-breadcrumbs"><Link to='/' className="kapee-breadcrumb">Home/</Link><span className="delimiter-sep forward-slash"></span><span className="last"><strong>Requisitos y FAQ</strong></span></div>				
			</div>
		</div>
	</div>
</div>
<div className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='"content-area col-md-12"'>
            <article>
              <div className='heading-wrap'>
                <h2 className="heading-title">Reglamento y Requisitos Básicos para el Alquiler </h2>
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
          <strong>Para poder alquilar equipos en Naranjita Rental,</strong> en primera instancia se deben aportar <strong>datos personales y laborales,</strong> tener alguna <strong>recomendación directa</strong> o <strong>referencia laboral / comercial</strong> previa con nosotros, o de la empresa a la que pertenezcan y/o con algún <strong>cliente de nuestra confianza</strong> y/o con algún <strong>colega del rubro</strong> al que ya le hayan alquilado antes, y/o de alguna <strong>institución educativa</strong> a la que pertenezcan como estudiantes en cursada, o como docentes u otro cargo en la misma, en caso de contar con <strong>todos</strong> los elementos necesarios para superar los controles administrativos requeridos podrán ser ingresados como clientes nuevos y proseguiremos con los pasos de alquiler, de otra manera <strong>Naranjita Rental se reserva el derecho de rechazar y/o cancelar</strong> las reservas (si es que estas existieran previamente) y <strong>no avanzar</strong> con las mismas hasta no se puedan cumplir con los <strong>requisitos básicos de confiabilidad comercial.</strong><br/><br/>
         
            <span>Específicamente para <strong>ESTUDIANTES</strong>, se puede alquilar con <strong>DNI</strong>, <strong>LIBRETA</strong> o <strong>CREDENCIAL</strong> que los acredite como tal y <strong>SERVICIO</strong> a su nombre o de un familiar directo.</span>
           
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
          Para&nbsp;<strong>reservar</strong>&nbsp;los equipos se&nbsp;<strong>confirma disponibilidad</strong>&nbsp;previamente por teléfono, si existe,&nbsp;<strong>Naranjita</strong>&nbsp;dejará en standby el equipo hasta que se<strong>&nbsp;refuerce la reserva con una seña</strong>&nbsp;del&nbsp;<strong>50%</strong>&nbsp;del total del alquiler como mínimo, dicha seña podrá abonarse en las oficinas de&nbsp;<strong>Naranjita en Belgrano o por transferencia bancaria.</strong>&nbsp;En caso de&nbsp;<strong>cancelarse o modificarse</strong>&nbsp;la reservación con una anticipación<strong>&nbsp;menor a 24hs</strong>,&nbsp;<strong>no se hará devolución de la misma.</strong>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        > 
          <Typography>Contrato de Responsabilidad y documentación</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Al momento de retirar los equipos se deberá cancelar el total del alquiler, y se firmará un contrato estándar de responsabilidad (por robo, rotura, accidente, faltante, mal uso, etc.) de los equipos alquilados. La persona que retire los equipos deberá ser mayor de edad, para firmar este contrato y/o poder retirar los equipos se deberá presentar SIEMPRE si o si cédula del Mercosur o documento nacional de identidad actualizado, fotocopia del mismo, mas una factura o recibo de un servicio actualizado donde figure el mismo domicilio y el mismo Apellido que en el DNI, y fotocopia del mismo, (extranjeros agregar pasaporte).</Typography>
          </AccordionDetails>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        > 
          <Typography>  Definición de 1 (una) jornada estándar en Naranjita</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Las jornadas estándar son de 24hs, comienzan siempre a las 9AM hasta las 9AM del día siguiente –sin importar a que hora se retiró el equipo el día anterior la jornada finaliza SIEMPRE si o si a las 9AM– ya que después de ese horario comienza una nueva jornada.</Typography>
          </AccordionDetails>
        
      </Accordion>
    
            </article>
            <article className='faq'>
              <div className='heading-wrap'>
                <h2 className="heading-title">FAQ (Preguntas Frecuentes)</h2>
              </div>

              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿PUEDO RETIRAR LOS EQUIPOS EL DÍA ANTERIOR?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>En caso de que no estén reservados por otro cliente se pueden retirar el dia previo antes de las 16.30hs.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿FORMAS DE PAGO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          -Efectivo (descuentos aplicables) <br/>
          -Transferencia bancaria con un recargo del 21%iva* (descuentos no aplicables).<br/>
          Si necesitas, realizamos factura A o B , el 21% aplica tanto abonando en efectivo cómo para transferencia.Disponibilidad y reserva de equipo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        > 
          <Typography>¿PUEDO VIAJAR CON LOS EQUIPOS AL INTERIOR O EXTERIOR?</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Si, con previo aviso al momento de hacer la reserva y se debe sacar un seguro de los equipos.Retiros, devoluciones y extensión de jornada.</Typography>
          </AccordionDetails>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        > 
          <Typography>¿PUEDE RETIRAR O DEVOLVER OTRA PERSONA A MI NOMBRE?</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Es obligatorio que retire la misma persona que hizo la reserva, la devolución puede hacerla otra persona</Typography>
          </AccordionDetails>
        
      </Accordion>

            </article>
          </div>
        </div>
      </div>
    </div>
    
    <div>

    </div>
    
    </div>;
};

export default Requisitos;
