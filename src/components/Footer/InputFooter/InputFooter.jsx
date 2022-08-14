import React from "react";
import Button from "../../Button/Button";
import classes from "./InputFooter.module.css";
import {  useSelector } from "react-redux";
import Alert from "../../Alert/Alert"



function InputFooter () {
    const contentInterface = useSelector(state => state.translation.language);
    const { NEWS_AND_UPDATES, ENTER_EMAIL_PLACEHOLDER, EMAIL_SUBSCRIBE,  ALL_RIGHTS_RESERVED_LABEL } = contentInterface;

    
    return (
    <div className={classes.Wrapper} >
        <p className={classes.P1}>{NEWS_AND_UPDATES}</p>
        <div  className={classes.Input} >
        <input placeholder={ENTER_EMAIL_PLACEHOLDER} className={classes.Input__input}/>
        <Button 
         text={EMAIL_SUBSCRIBE}
         className={classes.Button}
         onClick={Alert}/>
        </div>
        <p className={classes.P2}>CoolPass 2020</p>
        <p className={classes.P2}>Prague Card 1992-2020</p>
        <p className={classes.P3}>{ALL_RIGHTS_RESERVED_LABEL}</p>          
    </div>

    )
}

export default InputFooter;