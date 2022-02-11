import React from 'react';
import { Accordion, AccordionItem, AccordionHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Requisitos = () => {
  return <div>
    <h1>REQUISITOS</h1>
    <container className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='"content-area col-md-12"'>
            <article>
              <div className='heading-wrap'>
                <h4 className="heading-title">Reglamento y Requisitos Básicos para el Alquiler </h4>
              </div>
              <div>
                    <Accordion
                      open="1"
                      toggle={function noRefCheck(){}}
                    >
                      <AccordionItem>
                        <AccordionHeader targetId="1">Recomendaciones o referencias</AccordionHeader>
                        <AccordionItem accordionId="1"><strong>Para poder alquilar equipos en Naranjita Rental,</strong> en primera instancia se deben aportar <strong>datos personales y laborales,</strong> tener alguna <strong>recomendación directa</strong> o <strong>referencia laboral / comercial</strong> previa con nosotros, o de la empresa a la que pertenezcan y/o con algún <strong>cliente de nuestra confianza</strong> y/o con algún <strong>colega del rubro</strong> al que ya le hayan alquilado antes, y/o de alguna <strong>institución educativa</strong> a la que pertenezcan como estudiantes en cursada, o como docentes u otro cargo en la misma, en caso de contar con <strong>todos</strong> los elementos necesarios para superar los controles administrativos requeridos podrán ser ingresados como clientes nuevos y proseguiremos con los pasos de alquiler, de otra manera <strong>FDM se reserva el derecho de rechazar y/o cancelar</strong> las reservas (si es que estas existieran previamente) y <strong>no avanzar</strong> con las mismas hasta no se puedan cumplir con los <strong>requisitos básicos de confiabilidad comercial.</strong><br/>
<span>Específicamente para <strong>ESTUDIANTES</strong>, se puede alquilar con <strong>DNI</strong>, <strong>LIBRETA</strong> o <strong>CREDENCIAL</strong> que los acredite como tal y <strong>SERVICIO</strong> a su nombre o de un familiar directo.</span></AccordionItem>
  
                      </AccordionItem>
                    </Accordion>
                  </div>
            </article>
          </div>
        </div>
      </div>
    </container>
    
    
    </div>;
};

export default Requisitos;
