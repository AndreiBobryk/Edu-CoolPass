import React from "react";
import classes from "./ButtonsFooter.module.css";
import appStore from "../../../image/appstore.png";
import googlePlay from "../../../image/googleplay.png";
import {  useSelector } from "react-redux";


function ButtonsFooter () {
    const contentInterface = useSelector(state => state.translation.language);
    const {DOWNLOAD , FOOTER_prague_coolpass_app} = contentInterface;
    
    return (
    <div className={classes.Wrapper} >
        <p>{DOWNLOAD}</p>
        <p>{FOOTER_prague_coolpass_app}</p>
        <a href="/"><img src={appStore} alt="appStore" className={classes.AppStore} /></a>
        <a href="/"><img src={googlePlay} alt="appStore" className={classes.AppStore} /></a>
        
     
    </div>

    )
}

export default ButtonsFooter;