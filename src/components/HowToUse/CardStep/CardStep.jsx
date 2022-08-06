import React from "react";
import classes from "./CardStep.module.css"

function CardStep (props) {
const url = "https://static2.praguecoolpass.com/" + props.image;
return (
    <div className={classes.Wrapper}>
      <img src={url} alt="imgStep" className={classes.Image}  />
      <p className={classes.Index}>{props.index}</p>
      <p>{props.description}</p>
    </div>
)

}

export default CardStep;