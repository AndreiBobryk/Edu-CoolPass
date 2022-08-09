import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavHeader from "./NavHeader/NavHeader";
import classes from "./Header.module.css";
import classesBur from "./BurgerIcon/BurgerIcon.module.css";
import BurgerIcon from "./BurgerIcon/BurgerIcon";
import "./Header.css";
import MultiLanguage from "./MultiLanguage/MultiLanguage";

function Header() {
  const [isHiddenHeaderClasses, setIsHiddenClasses] = useState("Header");
  const [isClass, setIsClass] = useState(classesBur.Burger);
  const [isHiddenBurgerMenu, setIsHiddenBurgerMenu] = useState("NavHeader Hidden");
  const cls = [classesBur.Burger];

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = (event) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsHiddenClasses("Header Hide");
      } else {
        setIsHiddenClasses("Header");
      }
      lastScrollTop = st;
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
    } else {
      setIsHiddenBurgerMenu("NavHeader Hidden");
    }

    setIsClass(cls.join(" "));
  }

  return (
    <header className={isHiddenHeaderClasses}>
      <div className={classes.Header__wrapper}>
        <BurgerIcon onClick={toggleBurgerMenu} activeClass={isClass} />
        <div className={classes.Menu}>
          <Logo />
          <NavHeader isHidden={isHiddenBurgerMenu} />
          <div>
            <Button text="BUY NOW" style={{ marginRight: "11px" }} />
          </div>
          <div className={classes.Lang}>
            <MultiLanguage/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
