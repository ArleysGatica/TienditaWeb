import { React, useState } from "react";
import image from "../../../assets/image/logoo.png";
import imageUser from "../../../assets/image/logoo.png";
import pizzaCarrito from "../../../assets/image/logoo.png";
import HeaderView from "./header.view";

const data = [];

data.push({
  img: image,
  imgU: imageUser,
  imgC: pizzaCarrito,
});

function Header() {
  return <HeaderView data={data} />;
}

export default Header;
