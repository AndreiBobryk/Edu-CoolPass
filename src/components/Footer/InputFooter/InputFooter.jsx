import React from "react";
import Button from "../../Button/Button";
import classes from "./InputFooter.module.css";


function InputFooter () {
    
    return (
    <div className={classes.Wrapper} >
        <p className={classes.P1}>NEWS & UPDATES</p>
        <div style={{height:'48px', marginBottom: '12px'}} >
        <input placeholder="Enter your e-mail" />
        <Button text="SUBSCRIBE" style={{height:'48px', float:'left'}}/>
        </div>
        <p className={classes.P2}>CoolPass 2020</p>
        <p className={classes.P2}>Prague Card 1992-2020</p>
        <p className={classes.P3}>All rights reserved by Travel CoolPass Ltd. & Prague Card s.r.o.</p>          
    </div>

    )
}

export default InputFooter;