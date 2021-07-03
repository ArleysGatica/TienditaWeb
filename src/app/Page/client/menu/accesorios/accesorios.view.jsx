import React from "react";
import "./accesorios.style.css";
import Menu from "../menu";

import {CardAccesorios} from "./card-accesorios"

const AccesoriosView = (props) => {
  const  {isOpen, openModal, closeModal, data}  = props;
  
  console.log(data+"menudrinkviw");
  
  return (
    <>
      <Menu />
      <div className="container-drink">
        <div className="drink">
          <div className="drink__title">
            <h1>Accesorio</h1>
          </div>
          <div className="card-container">
            {data.map((Data, index) => (
              <div className="drink__card" key={index}>
                <div className="drink__image">
                  <img className="drink_img" src={Data.img} alt=""/>
                </div>
                <div className="drink__name"> {Data.name}</div>
               <CardAccesorios Data={Data} openModal={openModal} isOpen={isOpen} closeModal={closeModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default AccesoriosView;