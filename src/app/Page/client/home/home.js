import { React,  useState } from "react";
import HomeView from "./home.view";
import laptops from "../../../../assets/image/Laptop/asus.png";
import Calzone from "../../../../assets/image/celulares/z fold.png";
import Batido from "../../../../assets/image/accesorios/ps4.png";
import Hamburguesa from "../../../../assets/image/accesorios/bocina.png";
import PizzaIcon from "../../../../assets/image/Laptop/asus.png";

const data = [];
const data2 = [];
const ProductPopular = [];
const ProductPopular2 = [];

data.push({
  img: laptops,
  name: "Laptop",
});
data.push({
  img: Calzone,
  name: "Celulares",
});
data.push({
  img: Batido,
  name: "Acesorios",
});



data2.push({
  img: laptops,
  name: "Pizaa",
});
data2.push({
  img: Calzone,
  name: "Calzone",
});
data2.push({
  img: Batido,
  name: "batido",
});

data2.push({
  img: Hamburguesa,
  name: "Hamburguesa",
});

ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto1",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto2",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto3",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto4",
});
ProductPopular2.push({
  img: PizzaIcon,
  name: "Producto5",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto1",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto2",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto3",
});
ProductPopular.push({
  img: PizzaIcon,
  name: "Producto4",
});

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <HomeView
      ProductPopular2={ProductPopular2}
      ProductPopular={ProductPopular}
      data2={data2}
      data={data}
      open={open}
      setOpen={setOpen}
    />
  );
}

export default Home;
