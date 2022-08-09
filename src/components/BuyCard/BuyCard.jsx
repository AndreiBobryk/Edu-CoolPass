import React, { useState, useEffect } from "react";
import classes from "./BuyCard.module.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "./Card/Card";
import axios from "axios";
import Layout from "../Layout/Layout";

function BuyCard() {
  const endpoint =
    "https://api2.praguecoolpass.com/cardCategories?eshopId=77a85a2a-6b84-4d79-b856-dfafc14340a0";
  const [cards, setCards] = useState([]);

  async function getCard() {
    const data = await axios.get(endpoint);
    setCards(data.data.cards);
  }

  useEffect(() => {
    getCard();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.05,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <h3 className={classes.Title}>BUY PRAGUE COOLPASS / CARD</h3>
      <Slider {...settings}>
        {cards.map((card, index) => {
          const name = card.name.default;
          const priceAdult = card.products[0].price;
          const priceChild = card.products[1].price;
          return (
            <Card
              key={index}
              title={name}
              priceAdult={priceAdult}
              priceChild={priceChild}
            />
          );
        })}
      </Slider>
      <div style={{ marginTop: "40px" }} className={classes.Ps}>
        <div className={classes.Ps__Item}>
          <ul>
            <li>
              Prague CoolPass/Card is valid for consecutive days, not hours.
            </li>
            <li>
              Child/Student Pass is valid for children 6-16 years old and
              students on daily studies up to 26 years old.
            </li>
          </ul>
        </div>
        <div className={classes.Ps__Item}>
          <ul>
            <li>
              Any national or international student ID is OK. You do not need it
              when buying Pass, but you could be asked to show it when entering
              the attractions with a student CoolPass.
            </li>
          </ul>
        </div>

        <div className={classes.Ps__Item}>
          <div>ADULT 16+ years</div>
          <div>STUDENT 16 - 26 years</div>
          <div>CHILD 6-16 years</div>
        </div>
      </div>
    </Layout>
  );
}

export default BuyCard;
