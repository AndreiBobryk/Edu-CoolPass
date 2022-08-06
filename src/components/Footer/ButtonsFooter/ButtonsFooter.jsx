import React from "react";
import classes from "./ButtonsFooter.module.css";
import appStore from "../../../image/appstore.png";
import googlePlay from "../../../image/googleplay.png"

function ButtonsFooter () {
    
    return (
    <div className={classes.Wrapper} >
        <p>DOWNLOAD</p>
        <p>Prague CoolPass App</p>
        <a href="/"><img src={appStore} alt="appStore" className={classes.AppStore} /></a>
        <a href="/"><img src={googlePlay} alt="appStore" className={classes.AppStore} /></a>
        
     
    </div>

    )
}

export default ButtonsFooter;