import React from "react";
import {ReactComponent as RightSvg} from "../../image/svg/arrowRight.svg"
import {ReactComponent as LeftSvg} from "../../image/svg/arrowLeft.svg"


 function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top:"42%"}}
        onClick={onClick}
      >
       <RightSvg/>
      </div>
    );
}


 function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top:"42%", left:"-37px"}}
        onClick={onClick}
      >
        <LeftSvg/>
      </div>
    );
  }

  export  {SampleNextArrow, SamplePrevArrow};


