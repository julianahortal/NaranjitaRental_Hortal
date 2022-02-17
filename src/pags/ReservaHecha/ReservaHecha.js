import  React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

const ReservaHecha = () => {
  const { orderId } = useParams();
  const [reserva, setReserva] = useState({});
  const [errores, setErrores] = useState(null);
;

  useEffect(() => {
    const db = getFirestore()
    const reservasCollection = db.collection("reservas").doc(orderId)
    const getReservas = async() =>{   
        try{
            const response = await reservasCollection.get()
            if(!response.exists){
                console.log('No hay reservas disponibles');
            }
            setReserva({...response.data(), id: response.id});
        }catch(errores){
            setErrores(errores);
        }finally{
            setReserva(false);
    }  
  }
  getReservas() }, [orderId]);

  if (!reserva.id) {
    return <p>Cargando...</p>;
  }else if(errores){
     <Link to="*" ></Link>
  }

  return (
    <div>
      <h1>¡Gracias {reserva.cliente.nombre}, por reservar tus equipos con Naranjita Rental!</h1>
      <h2>Detalle de su reserva:</h2>
      <p>{reserva.items[0].item.nombre}</p>
    </div>
  );
};
export default ReservaHecha;