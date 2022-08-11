import React from "react";
import Button from "../../Button/Button";
import classes from "./InputFooter.module.css";
import {  useSelector } from "react-redux";



function InputFooter () {
    const contentInterface = useSelector(state => state.translation.language);
    const { NEWS_AND_UPDATES, ENTER_EMAIL_PLACEHOLDER, EMAIL_SUBSCRIBE,  ALL_RIGHTS_RESERVED_LABEL } = contentInterface;

    
    return (
    <div className={classes.Wrapper} >
        <p className={classes.P1}>{NEWS_AND_UPDATES}</p>
        <div style={{height:'48px', marginBottom: '12px'}} >
        <input placeholder={ENTER_EMAIL_PLACEHOLDER} />
        <Button text={EMAIL_SUBSCRIBE} style={{height:'48px', float:'left'}}/>
        </div>
        <p className={classes.P2}>CoolPass 2020</p>
        <p className={classes.P2}>Prague Card 1992-2020</p>
        <p className={classes.P3}>{ALL_RIGHTS_RESERVED_LABEL}</p>          
    </div>

    )
}

export default InputFooter;