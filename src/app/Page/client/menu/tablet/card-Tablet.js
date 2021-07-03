import { React } from "react";
import "./tablet.style.css";

export const CardTablet = (props) =>{
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