import  React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import { useCarrito } from "../../context/CarritoContext";



const ConfirmarReserva = () => {
  const {carrito, borrarCarrito} = useCarrito();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [dni, setDni] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  let goTo = useNavigate();

  const getTotal = (cart) => {
    let total = 0;
    cart.forEach((elemento) => {
      total += elemento.item.precio * elemento.cantidad;
    });
    return total;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!nombre || !telefono || !apellido || !dni || !domicilio || !mail) {
      console.log("Por favor llene los campos");
      return false;
    }

    const reserva = {
      cliente: { nombre, apellido, dni, domicilio, telefono, mail },
      items: carrito,
      total: getTotal(carrito),
    };
    console.table(reserva);
    const db = getFirestore();
    const reservaCollection = db.collection("reservas");
    const response = await reservaCollection.add(reserva);
    
    goTo(`/confirm/${response.id}`) 
    borrarCarrito();
  };

  return (
    <div >
       <div className="col-sm-9 p-3 main">
      <h2>Introduzca sus datos:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={nombre}  onChange={(e) => setNombre(e.target.value)} className="form-control" placeholder="Juan"/>
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" name="apellido" id="apellido" value={apellido}  onChange={(e) => setApellido(e.target.value)} className="form-control" placeholder="Pérez"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" name="email" className="form-control" id="mail"  value={mail}  onChange={(e) => setMail(e.target.value)} placeholder="juanperez@gmail.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="telefono"className="form-label">Teléfono</label>
          <input type="tel" name="telefono" className="form-control" id="telefono"  value={telefono}  onChange={(e) => setTelefono(e.target.value)} maxLength="11" placeholder="+541156984582"/>
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="tel"  name="dni" id="dni" value={dni}  onChange={(e) => setDni(e.target.value)} maxLength="8" placeholder="35694157"/>
        </div>
        <div className="mb-3">
          <label htmlFor="domicilio"className="form-label" >Domicilio</label>
          <input type="text" name="domicilio" className="form-control" id="domicilio" value={domicilio}  onChange={(e) => setDomicilio(e.target.value)} placeholder="SiempreViva 1234"/>
        </div>
        <input type="submit" value="Finalizar compra"/>
      </form>
    </div>
      
    </div>
  );
};

export default ConfirmarReserva;