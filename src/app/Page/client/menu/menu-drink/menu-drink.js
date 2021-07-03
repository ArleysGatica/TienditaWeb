import { React, useState } from "react";
import MenuDrinkView from "./menu-drink.view";
import image from "../../../../../assets/image/Laptop/asus.png";
import image2 from "../../../../../assets/image/Laptop/mac.png";
import image3 from "../../../../../assets/image/Laptop/dellg.png";
import image4 from "../../../../../assets/image/Laptop/dell.png";
import image5 from "../../../../../assets/image/Laptop/lenovo.png";
import image6 from "../../../../../assets/image/Laptop/mac2.png";
import image7 from "../../../../../assets/image/Laptop/acer.png";
import image8 from "../../../../../assets/image/Laptop/asusb.png"
import image9 from "../../../../../assets/image/Laptop/hpPA.png";
import image10 from "../../../../../assets/image/Laptop/asusZ.png";
import {Modal} from "../../../../components/modal/modal" ;
import "./menu-drink.css";
const data = [];

data.push({
  img: image,
  name: "Samsung ",
  description:
  "Samsung Electronics Samsung Galaxy S20 FE 5G | Teléfono celular Android desbloqueado de fábrica | 128 GB | Versión de teléfono inteligente de EE. UU. | Cámara profesional, zoom espacial 30X, modo nocturno | Nube Azul Marino",
});

data.push({
  img: image2,
  name: "Acer",
  description:
    " Sos puta maldita!!",
});
data.push({
  img: image3,
  name: "Combo f",
  description:
    "1",
});

data.push({
  img: image4,
  name: "Combo E",
  description:
    "2",
});
data.push({
  img: image5,
  name: "Combo E",
  description:
    "3",
});
data.push({
  img: image6,
  name: "Combo E",
  description:
    "4",
});
data.push({
  img: image7,
  name: "Combo E",
  description:
    "4",
});
data.push({
  img: image8,
  name: "Combo E",
  description:
    "4",
});
data.push({
  img: image9,
  name: "Combo E",
  description:
    "4",
});
data.push({
  img: image10,
  name: "Combo E",
  description:
    "4",
});

function MenuDrink() {
  
  console.log(data+"munudrink");
  const [producto, setProducto] = useState(null);
  const openModal = (producto) => setProducto(producto);
  const closeModal = () => setProducto(null);

  return <>
    <MenuDrinkView data={data} openModal={openModal} />
    <Modal isOpen={!!producto} closeModal={closeModal}>
      <div class ="card-compu">
        
              <div class = "content-compu">
                  <h2>{producto?.name}</h2>  
                  <p>{producto?.description}</p>
              </div>
              <div className="img-compu">
                 <img src = {producto?.img} alt= ""/>
              </div>
          
      </div>
    </Modal>
  </>;
  
}

export default MenuDrink;