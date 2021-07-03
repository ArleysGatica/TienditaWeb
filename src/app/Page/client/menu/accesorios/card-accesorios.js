import { React } from "react";
import "./accesorios.style.css";

export const CardAccesorios = (props) =>{
    const {openModal, Data} = props;
    console.log(Data);
    return (
        <>
         <div className="drink__order">
            <button className="drink--button" onClick={() => openModal(Data)} > 
                More
            </button>
        </div>
        </>

    );
}