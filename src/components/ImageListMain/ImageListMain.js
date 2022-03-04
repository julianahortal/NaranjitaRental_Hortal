import React from 'react';
import accesorios from '../../img/categorias/cat+accesorios.png'
import camaras from '../../img/categorias/cat+cam.png'
import estabilizadores from '../../img/categorias/cat+est.png'
import luces from '../../img/categorias/cat+ilum.png'
import sonido from '../../img/categorias/cat+son.png'
import lentes from '../../img/categorias/cat+lent.png'
import { useNavigate} from 'react-router-dom';
import './ImageListMain.css'


const ImageListMain = () => {
    const goTo = useNavigate();
    
  return (
    <div className='img-list'>
      {itemData.map((item) => (
        
          <img key= {item.img}className="list-hover" onClick = { () => goTo(`/categorias/${item.categoria}`)}
            src={item.img}
            
            alt={item.title}
          />
        
      ))}
    </div>
  );
}

const itemData = [
  {
    img: camaras,
    title: 'Cámaras',
    categoria: "camara"
  },
  {
    img: lentes,
    title: 'Lentes',
    categoria: "lentes"
  },
  {
    img: sonido,
    title: 'Sonido',
    categoria: "sonido"
  },
  {
    img: estabilizadores,
    title: 'Estabilizadores y trípodes',
    categoria: "estabilizadores"
  },
  {
    img: luces,
    title: 'Iluminacion',
    categoria: "iluminacion"
  },
  {
    img: accesorios,
    title: 'Accesorios',
    categoria: "accesorios"
  }
];

export default ImageListMain