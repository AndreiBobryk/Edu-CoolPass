import React from "react";
import Alert from "../../Alert/Alert";
import Button from "../../Button/Button";
import classes from "./CardOffer.module.css";

function CardOffer(props) {
  const { title, description, textButton } = props;
  const url = "https://static2.praguecoolpass.com/" + props.image;
  
  return (
    <div className={classes.Wrapper}>
      <img src={url} alt="offerImage" className={classes.Image} />
      <p className={classes.Title}>{title}</p>
      <div className={classes.HoverMenu}>
        <div className={classes.HoverMenu__Wrapper}>
          <div>
            <p className={classes.HoverMenu__Title}>{title}</p>
            <p className={classes.HoverMenu__Description}>{description}</p>
          </div>
          <Button
            text={textButton}
            style={{ marginBottom: "20px" }}
            onClick={Alert}
          />
        </div>
      </div>
    </div>
  );
}

export default CardOffer;
