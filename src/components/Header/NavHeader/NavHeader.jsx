import React, {useState} from "react";
import { useSelector } from "react-redux";
import "./NavHeader.css";

function NavHeader (props) {
  const contentNavMenu = useSelector(state => state.translation.header);
  const currentLang = useSelector(state => state.translation.currentLanguage);



  return (
   
    <nav>
      <ul className={props.isHidden }>
        {contentNavMenu.map(item => {
          const title = item.content[currentLang].title;
          const url = item.link;
          return (
            <li><a href={url}>{title}</a></li>
          )
        })}
      </ul>
    </nav>
   

              
            
    
  );
}

export default  NavHeader;
