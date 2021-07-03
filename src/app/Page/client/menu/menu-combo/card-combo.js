import { React } from "react";
import "./menu-combo.style.css";


export const CardCombo = (props) => {
  const { img, description, name, Preci } = props;

  return (
    <>
      <div class="card-combo">
        <div class="circle-combo">
          <div class="content-combo">
            <h2>{name} </h2>
            <p>{description}</p>
            <h3> {Preci}</h3>
            <a href="#">Comprar</a>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};