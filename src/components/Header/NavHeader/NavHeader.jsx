import React, {useState} from "react";
import "./NavHeader.css";

function NavHeader (props) {

  return (
   
    <nav>
      <ul className={props.isHidden }>
        <li><a href="/">CoolPass / PragueCard</a></li>
        <li><a href="/">Attractions & Tours</a></li>
        <li><a href="/">Getting your pass</a></li>
        <li><a href="/">Plan your trip</a></li>
        <li><a href="/">Current news</a></li>
        <li><a href="/">FAQ</a></li>
        <li><button className='Btn'>BUY NOW</button></li>
      </ul>
    </nav>
   

              
            
    
  );
}

export default  NavHeader;
