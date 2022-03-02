import  React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './ReservaHecha.css';


const ReservaHecha = () => {
  const {orderId} = useParams();
  const [reserva, setReserva] = useState({});
  const goTo = useNavigate();

  useEffect(() => {
    const db = getFirestore()
      db.collection("reservas")
        .doc(orderId)
        .get()
        .then((res) => setReserva({ id: res.id, ...res.data() }));
    }, [orderId]);
  

  if (!reserva.id) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>¡Gracias {reserva.cliente.nombre}, por reservar con Naranjita Rental!</h1>
      <p className="confirm">Te enviaremos un correo confirmando la disponibilidad de equipos. <br/>
        ¡Nos vemos pronto! 
      </p>
      <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_ajopekbi.json" style={{ height: '300px', width: '300px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
      
      <h4 className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</h4>
    </div>
  );
};
export default ReservaHecha;