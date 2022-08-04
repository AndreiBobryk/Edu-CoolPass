import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavHeader from "./NavHeader/NavHeader";
import classes from "./Header.module.css";

function Header () {

    return (
        <header className={classes.Header}>
            <div className={classes.Header__wrapper}>
                <Logo />
                <NavHeader />
                <div>
                    <Button text="BUY NOW" style={{ marginRight: '11px' }}/>
                    <Button text="EN" style={{width:'65px', height: '35px'}}/>
                </div>
            </div>



            
        </header>
    )

}

export default Header;