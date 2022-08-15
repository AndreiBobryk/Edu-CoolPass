import React from "react";
import { useSelector } from "react-redux";
import Alert from "../../Alert/Alert";
import "./NavHeader.css";

function NavHeader(props) {
  const contentNavMenu = useSelector((state) => state.translation.header);
  const currentLang = useSelector((state) => state.translation.currentLanguage);

  return (
    <nav>
      <ul className={props.isHidden}>
        {contentNavMenu.map((item) => {
          const title = item.content[currentLang].title;
          const url = item.link;
          return (
            <li>
              <a href={url}>{title}</a>
            </li>
          );
        })}
        {props.isOpenBurgerMenu ? (
          <li>
            <button className="Button__burger" onClick={Alert}>
              BUY ONLINE
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default NavHeader;
