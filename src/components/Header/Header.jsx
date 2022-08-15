import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import NavHeader from "./NavHeader/NavHeader";
import classes from "./Header.module.css";
import classesBur from "./BurgerIcon/BurgerIcon.module.css";
import BurgerIcon from "./BurgerIcon/BurgerIcon";
import "./Header.css";
import MultiLanguage from "./MultiLanguage/MultiLanguage";
import Button from "../Button/Button";
import { useSelector } from "react-redux";



function Header(props) {
  const contentInterface = useSelector(state => state.translation.language)
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)
  const [isHiddenHeaderClasses, setIsHiddenClasses] = useState("Header");
  const [isClass, setIsClass] = useState(classesBur.Burger);
  const [isHiddenBurgerMenu, setIsHiddenBurgerMenu] =
    useState("NavHeader Hidden");
  const cls = [classesBur.Burger];

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = (event) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsHiddenClasses("Header Hide");
        lastScrollTop = st;
      } else if ((lastScrollTop - st) > 20 ) {
        setIsHiddenClasses("Header");
        lastScrollTop = st;
      }
   
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleBurgerMenu() {
    if (isClass.split(" ").length === 1) {
      cls.push(classesBur.Open);
      setIsHiddenBurgerMenu("NavHeader");
      setIsOpenBurgerMenu(true)
    } else {
      setIsHiddenBurgerMenu("NavHeader Hidden");
      setIsOpenBurgerMenu(false)
    }

    setIsClass(cls.join(" "));
  }



  return (
    <header className={isHiddenHeaderClasses}>
      <div className={classes.Wrapper}>
        <BurgerIcon onClick={toggleBurgerMenu} activeClass={isClass} />
        <div className={classes.Menu}>
          <Logo />
          <NavHeader isHidden={isHiddenBurgerMenu} isOpenBurgerMenu={isOpenBurgerMenu} />
          <div className={classes.Buttons}>
          <div className={classes.Button__BuyOnline}>
            <Button
              text={contentInterface.BUY_NOW}
              style={{
                marginRight: "11px",
                height: "35px",
                padding: "0 20px",
                lineHeight: "35px",
                fontWeight: "700",
                fontSize: "15px",
              }}
            />
          </div>

          <MultiLanguage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
