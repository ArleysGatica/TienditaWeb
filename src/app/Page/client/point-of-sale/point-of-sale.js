import { React, useState, useEffect } from "react";
import PointOfSaleView from "./point-of-sale.view";
import ServicesPizza from "../../../../services/services-pizza";

function PointOfSale() {
  const ImageUrl = process.env.REACT_APP_URL_IMAGE || "https://localhost:53631";
  const [Sale, setSale] = useState([]);

  const [data, setData] = useState([]);
  const [ID, setID] = useState(1);
  const handleID = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Computadora":
        setID(1);
        break;
      case "Tablet":
        setID(2);
        break;
        default :
    }
  };
  const handleFdetail = (data) => {
    const sale = {
      title: data.producto,
      amount: 2,
      price: data.precio,
      image: ImageUrl + data.imagen,
    };
    console.log(sale);
    setSale((prevSale) => [...prevSale, sale]);
    console.log(Sale);
  };

  useEffect(() => {
    ServicesPizza(ID).then((response) => setData(response));
  }, [ID, Sale]);
  console.log(data);
  console.log(ID);
  return (
    <PointOfSaleView
      data={data}
      Sale={Sale}
      handleID={handleID}
      setID={setID}
      handleFdetail={handleFdetail}
    />
  );
}
export default PointOfSale;