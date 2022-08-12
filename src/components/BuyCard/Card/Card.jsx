import React from "react";
import { useSelector } from "react-redux";
import classes from "./Card.module.css";

function Card(props) {
  const contentInterface = useSelector(state => state.translation.language);
  const {  CALCULATOR_COMPLETE_BOOKING_BTN, YOUR_PRICE, CALC_ADULT, STUDENT_CHILD, PRICE, BUY_PRAGUE_CARD_COOL_PASS  } = contentInterface;
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Header}>
        <h2>{props.title}</h2>
        <p className={classes.Subtitle}>{BUY_PRAGUE_CARD_COOL_PASS }</p>
      </div>
      <div className={classes.Content}>
        <div className={classes.AdultCalc}>
          <span className={classes.AdultCalc__Name}>{ CALC_ADULT ? CALC_ADULT : 'Adult' }</span>
          <span className={classes.AdultCalc__Price}>
            <span className={classes.AdultCalc__PriceTitle}>{PRICE}</span>
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
          <span className={classes.ChildCalc__Name}>{STUDENT_CHILD}</span>
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
        <div className={classes.PriceTotal}>{YOUR_PRICE}: <span className={classes.PriceTotalSum}>0.00 EUR</span></div>
      </div>
      <div className={classes.Footer}>
        <button className={classes.Button}>{CALCULATOR_COMPLETE_BOOKING_BTN}</button>

      </div>
    </div>
  );
}

export default Card;
