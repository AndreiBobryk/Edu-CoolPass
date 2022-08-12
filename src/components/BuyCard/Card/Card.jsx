import React, {useState} from "react";
import { useSelector } from "react-redux";
import classes from "./Card.module.css";

function Card(props) {
  const [countAdult,  setCountAdult] = useState(0)
  const [countChild,  setCountChild] = useState(0)
  const contentInterface = useSelector(state => state.translation.language);
  const {  CALCULATOR_COMPLETE_BOOKING_BTN, YOUR_PRICE, CALC_ADULT, STUDENT_CHILD, PRICE, BUY_PRAGUE_CARD_COOL_PASS  } = contentInterface;
  const {priceAdult, priceChild} = props;


  const calculateTotalPrice = () => {
    return priceAdult * countAdult + priceChild * countChild;
  }
  
  const increaseCountAdult = () => {
    setCountAdult(countAdult+1);
    calculateTotalPrice()

  };
  const decreaseCountAdult = () => {
   if (countAdult)  {
    setCountAdult(countAdult-1);
    calculateTotalPrice();

   }
  };
  const increaseCountChild = () => {
    setCountChild(countChild+1);
    calculateTotalPrice();
  };
  const decreaseCountChild = () => {
    if (countChild) {
      setCountChild(countChild-1);
      calculateTotalPrice();
    }
  }
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
            <span className={classes.AdultCalc__PriceSum}>{priceAdult} EUR</span>
          </span>
          <button className={classes.AdultCalc__Button} onClick={decreaseCountAdult} style={{marginLeft:'20px'}}>-</button>
          <span
            className={classes.AdultCalc__Count}
            style={{ minWidth: "60px" }}
          >
            {countAdult}
          </span>
          <button className={classes.AdultCalc__Button} onClick={increaseCountAdult}>+</button>
        </div>
        <div className={classes.ChildCalc}>
          <span className={classes.ChildCalc__Name}>{STUDENT_CHILD}</span>
          <span className={classes.ChildCalc__PriceSum}>{priceChild} EUR</span>
          <button className={classes.AdultCalc__Button} onClick={decreaseCountChild} >-</button>
          <span
            className={classes.ChildCalc__Count}
            style={{ minWidth: "60px" }}
          >
            {countChild}
          </span>
          <button className={classes.AdultCalc__Button} onClick={increaseCountChild}>+</button>
        </div>
        <div className={classes.PriceTotal}>{YOUR_PRICE} <span className={classes.PriceTotalSum}>{calculateTotalPrice()}.00 EUR</span></div>
      </div>
      <div className={classes.Footer}>
        <button className={classes.Button}>{CALCULATOR_COMPLETE_BOOKING_BTN}</button>

      </div>
    </div>
  );
}

export default Card;
