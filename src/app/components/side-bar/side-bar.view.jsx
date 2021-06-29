import React from "react";
import "./side-bar.style.css";
import { NavLink, Link } from "react-router-dom";

const SideBarView = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((data) => (
        <div className="SideBarContainer">
          <Link to="/home" className="logo">
            <img src={data.img} alt="" />
          </Link>

          <div className="top-nav">
            <div className="top-nav__component">
              <div className="button-nav">
                <div className="bottom-nav">
                  <div className="nav-bootom__menu">
                    <NavLink to="/menu" className="menu-item">
                      MENU
                    </NavLink>
                    <a className="menu-item">CONTACTO</a>
                    <a className="menu-item">COMPRAR EN LINEA</a>
                  </div>
                </div>
              </div>
              <div className="imgC">
                <img src={data.imgC} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SideBarView;
