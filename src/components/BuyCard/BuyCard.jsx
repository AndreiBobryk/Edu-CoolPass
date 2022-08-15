import React, { useState, useEffect } from "react";
import classes from "./BuyCard.module.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "./Card/Card";
import axios from "axios";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";

function BuyCard() {
  const contentInterface = useSelector((state) => state.translation.language);
  const {
    BUY_COOLPASS_PRAGUE_CARD,
    CALCULATOR_card_validity,
    CALCULATOR_child_card_validity_tip,
    CALCULATOR_student_id_info,
    ADULT_AGE,
    STUDENT_AGE,
    CHILD_AGE,
  } = contentInterface;
  const cards = useSelector((state) => state.translation.buyCard);

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3.05,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <h3 className={classes.Title}>{BUY_COOLPASS_PRAGUE_CARD}</h3>
      { cards.length && <Slider {...settings}>
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
      </Slider>}
      <div style={{ marginTop: "40px" }} className={classes.Ps}>
        <div className={classes.Ps__Item}>
          <ul>
            <li>
              {CALCULATOR_card_validity}
            </li>
            <li>
              {CALCULATOR_child_card_validity_tip}
            </li>
          </ul>
        </div>
        <div className={classes.Ps__Item}>
          <ul>
            <li>
              {CALCULATOR_student_id_info}
            </li>
          </ul>
        </div>

        <div className={classes.Ps__Item}>
          <div>{ADULT_AGE}</div>
          <div>{STUDENT_AGE}</div>
          <div>{CHILD_AGE}</div>
        </div>
      </div>
    </Layout>
  );
}

export default BuyCard;
