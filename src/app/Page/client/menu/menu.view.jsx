import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.style.css";
import Layout from "../../../components/shared/theme/layout";

const MenuView = () => {
  return (
    <>
      <Layout />
      <div className="menu-container">
        <div className="menu-bar">
          
          <NavLink
            to="/menu-pizza"
            className="menu__items"
            activeClassName="active"
          >
            pizza
          </NavLink>
          
          <NavLink
            to="/menu-drink"
            className="menu__items"
            activeClassName="active"
          >
            Laptops
          </NavLink>
          <NavLink
            to="/menu-combo"
            className="menu__items"
            activeClassName="active"
          >
            combo
          </NavLink>
          <NavLink
            to="/menu-smoothie"
            className="menu__items"
            activeClassName="active"
          >
            Batido
          </NavLink>
          
        </div>
      </div>
    </>
  );
};
export default MenuView;
