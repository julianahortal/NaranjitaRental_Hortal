import React from 'react';
import { getFirestore } from '../firebase';

const catalogo =  [   {"id":"AA0001", "tipo": "camara", "marca":"Sony", "titulo": "Sony A7 3", "stock":2, "precio": 5990, "descripcion": "Camara Sony 4K – UHD A7iii (Full Frame – Super 35mm) + Cage SmallRig + Metabones Canon EF to E-mount (4K XAVC & S-Log3 Gamma 3840×2160 pixeles en formato XAVC-S 100mbs en modo 4K y 50mbs en 1080p) (Slow Motion 120fps en Full HD 1920×1080) Nuevo Sensor retroiluminado (BSI) CMOS Exmor R de 24mpx, Enfoque Rápido mejorado híbrido de 693 puntos de AF y 425 puntos de contraste, nuevo visor OLED Tru-Finder XGA mejorado con el factor de magnificación más alto que existe, un 0.78x., estabilizador de 5 ejes óptico, ISO hasta 204.800 y 10fps Shooting, WiFi, NFC, procesador de imagen BIONZ X – Conector USB-C / Doble Zocalo de tarjeta SDHC.", "img":"https://i.postimg.cc/7Z4Tkhp4/sony-a7-3.jpg" },
{"id":"AA0002", "tipo": "camara", "marca":"Sony", "titulo": "Sony A7s 2", "stock": 3, "precio": 2950, "descripcion": "Cámara Sony Full Frame – Super 35mm. Slow Motion 120fps en Full HD 1920×1080) Nuevo Sensor retroiluminado (BSI) CMOS Exmor R de 12,2mpx, (3840 x 2160: 30 fps, 24 fps, 25 fps / 1920 x 1080: 60 fps, 30 fps, 24 fps, 50 fps, 25 fps / 1280 x 720: 120 fps, 100 fps) enfoque híbrido de 399 puntos de AF y 25 puntos de contraste, nuevo visor OLED Tru-Finder XGA mejorado con el factor de magnificación más alto que existe, un 0.78x., estabilizador de 5 ejes óptico, ISO hasta 409.600, WiFi, NFC, procesador de imagen BIONZ X.", "img" :"https://i.postimg.cc/vZDwDtRt/sony-a7s-ii-video-1.jpg"},
{"id":"AB0001", "tipo": "camara", "marca":"Canon", "titulo":"Canon EOS 6D", "stock":5, "precio": 2960, "descripcion": "Cámara Canon EOS 6D FULL FRAME (KIT VIDEO) REFLEX DIGITAL 20,2mpx. Full Frame Sensor, Procesador DIGIC 5+ / WiFi / GPS incorporado para control de la camara con dispositivos Smart Phone y Tablets / LCD High Resolution 3.0″", "img":"https://i.postimg.cc/sg31L8hD/canon-6d-video.jpg" },
]


const Nosotros = () => {
  const db= getFirestore();
  const collection = db.collection('catalogo')
  const crearProductoEnFirestore = () => {
    catalogo.forEach((producto) => {      
      collection
        .add(producto)
        .then((res) => console.log('prodc agreg', res.id))
        .catch((err) => console.log('prodc agreg', err))
  })
  }
  return <div>
    <h1>NOSOTROS</h1>
    
    <div>
    <button onClick={crearProductoEnFirestore}>agregar a firestore</button>
    </div>
    
    </div>;
};

export default Nosotros;
