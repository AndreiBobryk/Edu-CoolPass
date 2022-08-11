import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Button/Button";
import classes from "./MultiLanguage.module.css";
// import OutsideClick from "./OutsideClick/OutsideAlerter";
import {ReactComponent as ArrowDown} from "../../../image/svg/arrowDown.svg";
import { setLanguage } from "../../../redux/reducer";
import { getTranslate } from "../../../redux/actions/translate";

const objLanguages = {
  'English': 'en',
  'Čeština': 'cs',
  'Deutsch': 'de',
  'Espanol': 'es',
  'Italiano': 'it',
  'Francais': 'fr',
  'Русский': 'ru',

}

function MultiLanguage() {
  const dispatch = useDispatch();
  const initLanguage = objLanguages['English'];
  const [isOpenListLanguage, setIsOpenListLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(initLanguage);

  const handleClickButton = () => {
    if (!isOpenListLanguage) {
      setIsOpenListLanguage(true);

    }
  }

  function useOutsideClick(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setTimeout(()=>setIsOpenListLanguage(false), 100)
          // setIsOpenListLanguage(false);
          // const handleCloseList = props.setState;
          // handleCloseList(false);
  
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  /**
   * Component that alerts if you click outside of it
   */
  function OutsideClick(props) {
      
    const wrapperRef = useRef(null, props);
    useOutsideClick(wrapperRef);
  
    return <div ref={wrapperRef}>{props.children}</div>;
  }
  

  


  return (
    <div className={classes.Wrapper}>
      <button className={classes.Button} style={{background: '#252C3E'}} onClick={handleClickButton}  >{currentLanguage} <ArrowDown className={classes.Arrow}/></button>
      { isOpenListLanguage ? 
      (<OutsideClick setState={setIsOpenListLanguage}>
      <div className={classes.List}>
        <ul>
          {Object.keys(objLanguages).map((item, key) => {
            return (<li 
              key={key}
              onClick={(e)=>{
                const newLanguage = e.target.innerText;
                setCurrentLanguage(objLanguages[newLanguage]);
                setIsOpenListLanguage(false);
                dispatch(getTranslate(objLanguages[newLanguage]))


              }}

            >{item}</li>)
          })}
        </ul>
      </div>
    </OutsideClick>) : null
      }
    </div>
  );
}

export default MultiLanguage;
