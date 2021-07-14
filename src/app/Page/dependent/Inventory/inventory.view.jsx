import { React } from "react";
import { CardInventory } from "../../../components/card-inventory/card-inventory";
import FormAddProduct from "../../../components/form-add-product/form-add-product";
import { Modal } from "../../../components/modal/modal";
import { CardSoldOut } from "../../../components/card-sold-out/card-sold-out";

import "./inventory.style.css";

const InventoryView = (props) => {
  const { isOpen, openModal, closeModal } = props;
  return (
    <>
      <div className="Container">
        <div className="Container__Inventory">
          <div className="Container__Inventory__Header">
            <div className="Container__Inventory__Header__Title">
              <h2>INVENTARIO</h2>
            </div>
            <div className="Container__Inventory__Header__Filter">
              <button>Categoria:Pizza</button>
              
              <input placeholder="buscar producto" type="text" />
            </div>
            <div className="Container__Inventory__Header__AddProduct">
              <button
                className="Container__Inventory__Header__AddProduct-open"
                onClick={openModal}
              >
                Agregar Producto
              </button>
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <FormAddProduct />
              </Modal>
            </div>
          </div>
          <div className="Container__Inventory__FilterStockQuantity">
            <h3>Stock Quantity</h3>
          </div>
          <div className="Container__Inventory__Contents">
            <div className="Container__Inventory__Contents__title">
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>#</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>SKU</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Nombre</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Categoria</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Precio</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Catidad</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
               
              </div>
            </div>
            <CardInventory />
            <CardInventory />
            <div className="Spacing"></div>

            <div className="Container__Inventory__Contents__delete">
              <div className="eli"></div>
              <button>ELIMINAR</button>
            </div>
            <div className="Spacing"></div>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default InventoryView;
