import React, { useRef, useEffect } from "react";


/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref, props) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
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
    console.log('OutsideClick', props)
  const wrapperRef = useRef(null, props);
  useOutsideClick(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}


export default OutsideClick;