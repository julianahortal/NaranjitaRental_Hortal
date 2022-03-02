import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import accesorios from '../../img/categorias/cat+accesorios.png'
import camaras from '../../img/categorias/cat+cam.png'
import estabilizadores from '../../img/categorias/cat+est.png'
import luces from '../../img/categorias/cat+ilum.png'
import sonido from '../../img/categorias/cat+son.png'
import { useNavigate} from 'react-router-dom';
import './ImageListMain.css'

const ImageListMain = () => {
    const goTo = useNavigate();
    
  return (
    <ImageList   cols={5} rowHeight={225}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} onClick = { () => goTo(`/categorias/${item.categoria}`)}>
          <img className="list-hover"
            src={`${item.img}?w=310&h=310&auto=format`}
            srcSet={`${item.img}?w=310&h=310&auto=format&dpr=2 3x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: camaras,
    title: 'Cámaras',
    categoria: "camara"
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