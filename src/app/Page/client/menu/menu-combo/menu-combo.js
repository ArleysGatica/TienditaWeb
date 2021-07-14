
import MenuComboView from "./menu-combo.view";
import image from "../../../../../assets/image/celulares/s9.png";
import image2 from "../../../../../assets/image/celulares/P20.png";

const data = [];

data.push({
  img: image,
  name: "Samsung Galaxy s9",
  description:
    "Samsung Galaxy S9 | Teléfono celular Android desbloqueado de fábrica | 128 GB | Versión de teléfono inteligente de EE. UU. | Cámara profesional, zoom espacial 30X, modo nocturno | Rosado",
  Preci:" $ 800.00",
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
  
  return <MenuComboView data={data} />;
}
export default MenuCombo;
