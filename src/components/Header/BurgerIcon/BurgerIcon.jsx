import React from "react";


function BurgerIcon (props) {

    return(
        <div className={props.activeClass} onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>           
        </div> 
    )
}

export default BurgerIcon; 