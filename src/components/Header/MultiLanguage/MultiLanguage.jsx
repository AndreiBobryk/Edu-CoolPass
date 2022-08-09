import React, { useState, useRef, useEffect } from "react";
import Button from "../../Button/Button";
import classes from "./MultiLanguage.module.css";
// import OutsideClick from "./OutsideClick/OutsideAlerter";

const objLanguages = {
  'English': 'EN',
  'Čeština': 'CS',
  'Deutsch': 'DE',
  'Espanol': 'ES',
  'Italiano': 'IT',
  'Francais': 'FR',
  'Русский': 'RU',

}

function MultiLanguage() {
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
      <Button text={currentLanguage} style={{background: '#252C3E'}} onClick={handleClickButton} />
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
