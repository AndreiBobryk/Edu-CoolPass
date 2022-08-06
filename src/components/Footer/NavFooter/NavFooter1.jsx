import React from "react";
import classes from "./NavFooter.module.css";

function NavFooter ({items, style}) {
    
    return (
        <div className={classes.Wrapper} style={style}>
        <nav>
            <ul className={classes.NavFooter}>
                {items.map((item, index)=>{
                    return (<li key={index}><a href="/">{item}</a></li>)
                })}
            </ul>
        </nav>
    </div>

    )
}

export default NavFooter;