import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Header}>
        <h2>{props.title}</h2>
        <p className={classes.Subtitle}>Buying Prague CoolPass / Card</p>
      </div>
      <div className={classes.Content}>
        <div className={classes.AdultCalc}>
          <span className={classes.AdultCalc__Name}>Adult</span>
          <span className={classes.AdultCalc__Price}>
            <span className={classes.AdultCalc__PriceTitle}>Price</span>
            <span className={classes.AdultCalc__PriceSum}>{props.priceAdult} EUR</span>
          </span>
          <button className={classes.AdultCalc__Button} style={{marginLeft:'20px'}}>-</button>
          <span
            className={classes.AdultCalc__Count}
            style={{ minWidth: "60px" }}
          >
            0
          </span>
          <button className={classes.AdultCalc__Button}>+</button>
        </div>
        <div className={classes.ChildCalc}>
          <span className={classes.ChildCalc__Name}>Student Child</span>
          <span className={classes.ChildCalc__PriceSum}>{props.priceChild} EUR</span>
          <button className={classes.AdultCalc__Button}>-</button>
          <span
            className={classes.ChildCalc__Count}
            style={{ minWidth: "60px" }}
          >
            0
          </span>
          <button className={classes.AdultCalc__Button}>+</button>
        </div>
        <div className={classes.PriceTotal}>Your price: <span className={classes.PriceTotalSum}>0.00 EUR</span></div>
      </div>
      <div className={classes.Footer}>
        <button className={classes.Button}>complete your booking</button>

      </div>
    </div>
  );
}

export default Card;
