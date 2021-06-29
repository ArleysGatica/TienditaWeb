import { React, useState } from "react";
import MenuComboView from "./menu-combo.view";
import image from "../../../../../assets/image/celulares/s20.jpg";
import image2 from "../../../../../assets/image/celulares/a21s.jpg";

const data = [];

data.push({
  img: image,
  name: "Samsung Galaxy s20",
  description:
    "Samsung Electronics Samsung Galaxy S20 FE 5G | Teléfono celular Android desbloqueado de fábrica | 128 GB | Versión de teléfono inteligente de EE. UU. | Cámara profesional, zoom espacial 30X, modo nocturno | Nube Azul Marino",
});
data.push({
  img: image,
  name: "Combo f",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
data.push({
  img: image,
  name: "Combo f",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});

data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
data.push({
  img: image2,
  name: "Combo E",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autaspernatur quasi voluptas pariatur animi in omnis at vel illumamet laudantium distinctio nam Cupiditate deserunt ullam veroquas nulla Voluptates",
});
console.log(data);
function MenuCombo() {
  console.log(data);
  return <MenuComboView data={data} />;
}
export default MenuCombo;
