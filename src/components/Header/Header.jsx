import React, {useState} from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavHeader from "./NavHeader/NavHeader";
import classes from "./Header.module.css";
import classesBur from "./BurgerIcon/BurgerIcon.module.css";
import BurgerIcon from "./BurgerIcon/BurgerIcon";

function Header () {
    const [isClass, setIsClass] =  useState(classesBur.Burger);
    const [isHidden, setIsHidden] =  useState('NavHeader Hidden');
    const cls = [classesBur.Burger];
 
     function toggleBurgerMenu () {
       
         if (isClass.split(' ').length === 1) {
             cls.push(classesBur.Open);
             setIsHidden('NavHeader');
         } else {
            setIsHidden('NavHeader Hidden');
            
         }

         
  
         setIsClass(cls.join(' '));
        
 
     }

    return (
        <header className={classes.Header}>
            <div className={classes.Header__wrapper}>
                <BurgerIcon onClick={toggleBurgerMenu} activeClass={isClass}/>
                <div className={classes.Menu}>
                <Logo />
                <NavHeader isHidden={isHidden} />
                <div>
                    <Button text="BUY NOW" style={{ marginRight: '11px' }}/>
                    
                </div>
                <div className={classes.Lang}>
                <Button text="EN" style={{width:'65px', height: '35px'}}/>
                    
                </div>
                </div>
            </div>



            
        </header>
    )

}

export default Header;