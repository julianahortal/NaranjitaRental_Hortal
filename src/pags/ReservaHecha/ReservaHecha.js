import  React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


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
      <p className='volverInicio' onClick = { () => goTo(`/`)}>Volver al inicio</p>
    </div>
  );
};
export default ReservaHecha;