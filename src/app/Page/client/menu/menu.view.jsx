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
            to="/accesorios"
            className="menu__items"
            activeClassName="active"
          >
            Accesorio
          </NavLink>
          
          <NavLink
            to="/menu-drink"
            className="menu__items"
            activeClassName="active"
          >
            Laptops
          </NavLink>
          <NavLink
            to="/celulares"
            className="menu__items"
            activeClassName="active"
          >
            Telefono
          </NavLink>
          <NavLink
            to="/tablet"
            className="menu__items"
            activeClassName="active"
          >
            Tablet
          </NavLink>
          
        </div>
      </div>
    </>
  );
};
export default MenuView;
