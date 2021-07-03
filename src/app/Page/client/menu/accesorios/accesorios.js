import { React, useState } from "react";
import AccesoriosView from "./accesorios.view";
import image from "../../../../../assets/image/accesorios/aiport.png";
import image2 from "../../../../../assets/image/accesorios/bocina.png";
import image3 from "../../../../../assets/image/accesorios/mouse.png";
import image4 from "../../../../../assets/image/accesorios/tecladog.png";
import image5 from "../../../../../assets/image/accesorios/audifonosb.png";
import image6 from "../../../../../assets/image/accesorios/bocinab.png";
import image7 from "../../../../../assets/image/accesorios/portatilbat.png";
import image8 from "../../../../../assets/image/accesorios/ps4.png"
import image9 from "../../../../../assets/image/accesorios/razer.png";
import image10 from "../../../../../assets/image/accesorios/teclado.png";
import image11 from "../../../../../assets/image/accesorios/razerg.png";
import image12 from "../../../../../assets/image/accesorios/tecladoapp.png";
import image13 from "../../../../../assets/image/accesorios/portatilb.png";
import {Modal} from "../../../../components/modal/modal" ;
import "./accesorioss.css";
const data = [];

data.push({
  img: image,
  name: "Iphone X ",
  description:
  "Pantalla LCD Liquid Retina HD de 6.1 pulgadas, resistencia al polvo y al agua  Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con Modo Noche, modo Retrato y video 4K de hasta 60 cps Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta, Carga rápida",
  price: "$ 750",
});

data.push({
  img: image2,
  name: "Honor X",
  description:
    " Sos puta maldita!!",
    price: "$ 750",
});
data.push({
  img: image3,
  name: "Samsung ZFold",
  description:
    "1",
    price: "$ 750",
});

data.push({
  img: image4,
  name: "Honor 7A",
  description:
    "Huawei 3 GB + 32 GB 5.7 pulgadas EMUI 8.0 (Android 8.0) Qualcomm Snapdragon 430 Octa Core GSM & WCDMA & FDD-LTE (azul)",
    price: "$ 750",
});
data.push({
  img: image5,
  name: "Huawei P20 PRO",
  description:
    "3",
    price: "$ 750",
});
data.push({
  img: image6,
  name: "IPhone 11 PRO MAX",
  description:
    "Pantalla: 6.5, 1242 x 2688 pixels Procesador: Apple A13 Bionic RAM: 4GB Almacenamiento: 64GB/256GB/512GB Expansión: sin microSD Cámara: Triple, 12MP+12MP+12MP  Batería: 3969 mAh OS: iOS 13 Perfil: 8.1 mm Peso: 226 g Precio: ~ 1099 USD",
    price: "$ 750",
});
data.push({
  img: image7,
  name: "Combo E",
  description:
    "4",
    price: "$ 750",
});
data.push({
  img: image8,
  name: "Combo E",
  description:
    "4",
    price: "$ 750",
});
data.push({
  img: image9,
  name: "P20 life Huawei",
  description:
    "La versio de este año del P20 Lite incluye una pantalla más grande, de 6.4 pulgadas, que mantiene la resolución FullHD+ de su antecesor. Además dobla la memoria interna, pasando de los 64 GB a los 128 GB aunque mantiene la RAM. Dispone de un Kirin 710 y 4 GB de memoria RAM",
    price: "$ 750",
});
data.push({
  img: image10,
  name: "Samsung Galaxy S9",
  description:
    "Pantalla: 6.2 pulgadasSistema Operativo: Android 8 Cámara principal: 12 + 12 MP Cámara frontal: 8 MP Memoria Interna: 64 GB Batería: 3500 mAh",
    price: "$ 750",
});
data.push({
  img: image11,
  name: "Combo E",
  description:
    "4",
    price: "$ 750",
});
data.push({
  img: image12,
  name: "Combo E",
  description:
    "4",
    price: "$ 750",
});
data.push({
  img: image13,
  name: "Combo E",
  description:
    "4",
    price: "$ 750",
});


function MenuDrink() {
  
  console.log(data+"munudrink");
  const [producto, setProducto] = useState(null);
  const openModal = (producto) => setProducto(producto);
  const closeModal = () => setProducto(null);

  return <>
    <AccesoriosView data={data} openModal={openModal} />
    <Modal isOpen={!!producto} closeModal={closeModal}>
      <div class ="card-compu">
        
              <div class = "content-compu">
                  <h4>{producto?.name}</h4>  
                  <p>{producto?.description}</p>
                  <h3>{producto?.price}</h3>
              </div>
              <div className="img-compu">
                 <img src = {producto?.img} alt= ""/>
              </div>
          
      </div>
    </Modal>
  </>;
  
}

export default MenuDrink;