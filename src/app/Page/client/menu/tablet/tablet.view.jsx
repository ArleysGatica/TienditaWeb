import React from "react";
import "./tablet.style.css";
import Menu from "../menu";

import {CardTablet} from "./card-Tablet"

const TabletView = (props) => {
  const  {isOpen, openModal, closeModal, data}  = props;
  
  console.log(data+"menudrinkviw");
  
  return (
    <>
      <Menu />
      <div className="container-drink">
        <div className="drink">
          <div className="drink__title">
            <h1>TABLET</h1>
          </div>
          <div className="card-container">
            {data.map((Data, index) => (
              <div className="drink__card" key={index}>
                <div className="drink__image">
                  <img className="drink_img" src={Data.img} alt=""/>
                </div>
                <div className="drink__name"> {Data.name}</div>
               <CardTablet Data={Data} openModal={openModal} isOpen={isOpen} closeModal={closeModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TabletView;