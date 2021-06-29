import { React } from "react";
import "./menu-combo.style.css";
import {Modal} from "../../../../components/modal/modal"

export const CardCombo = (props) => {
  const { img, description, name } = props;

  return (
    <>
      <div class="card-combo">
        <div class="circle-combo">
          <div class="content-combo">
            <h2>{name} </h2>
            <p>{description}</p>
            <a href="#">Comr</a>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};