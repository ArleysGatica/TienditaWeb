import { React, useState } from "react";
import "./form-add-product.style.css";
import Texfield from "../textfield/texfield";
import { fetchArticulo } from "../../../services/services-articulo";


const FormAddProduct = () => {
 

  const [nombre, setNombre] = useState();
  const [stok, setStok] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [costo, setCosto] = useState();
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();

  const product = {
    CategoriaID:categoria,
    Proveedor:"NDFJH",
    NombreArt:nombre, 
    Precio:precio,
    Stock:stok, 
   Imagen:imagen, 
  };

  const handlerProductChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        console.log(nombre);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Categoria":
        setCategoria(value);
        console.log(categoria);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Costo":
        setCosto(value);
        break;
      case "Descripcion":
        setDescripcion(value);
        break;
      case "Imagen":
        setImagen(value);
        break;
      default:
        break;
    }
  };
  const handlerSaveProduct = () => {
    fetchArticulo.PostArticulo(product)
    console.log(product);
  };
  return (
    <>
      <div className="FormAddProduct__container">
        <div className="FormAddProduct__container__title">
          <h1> Agregar Producto</h1>
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Stock"}
            placeHolder={"Stock"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Categoria"}
            placeHolder={"Categoria"}
            type={"text"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Precio"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Costo"}
            placeHolder={"Costo"}
            type={"number"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Descripcion"}
            placeHolder={"Descripcion"}
            type={"text"}
          />
        </div>
        <div className="FormAddProduct__container_item">
          <Texfield
            handlerChange={handlerProductChange}
            name={"Imagen"}
            placeHolder={"Imagen"}
            type={"text"}
          />
        </div>
       
        <button
          className="FormAddProduct__container--saveProduct"
          onClick={handlerSaveProduct}
        >
          Guardar Producto
        </button>
      </div>
    </>
  );
};
export default FormAddProduct;
