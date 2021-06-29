import React from "react";
import "./menu-drink.style.css";
import Menu from "../menu";

import {CardCompu} from "./card-Compu"

const MenuDrinkView = (props) => {
  const  {isOpen, openModal, closeModal, data}  = props;
  
  console.log(data+"menudrinkviw");
  
  return (
    <>
      <Menu />
      <div className="container-drink">
        <div className="drink">
          <div className="drink__title">
            <h1>Laptop</h1>
          </div>
          <div className="card-container">
            {data.map((Data, index) => (
              <div className="drink__card" key={index}>
                <div className="drink__image">
                  <img className="drink_img" src={Data.img} alt=""/>
                </div>
                <div className="drink__name"> {Data.name}</div>
               <CardCompu Data={Data} openModal={openModal} isOpen={isOpen} closeModal={closeModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuDrinkView;