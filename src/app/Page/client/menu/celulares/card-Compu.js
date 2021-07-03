import { React } from "react";
import "./menu-drink.style.css";

export const CardCompu = (props) =>{
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