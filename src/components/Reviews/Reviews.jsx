import React, { useState, useEffect } from "react";
import classes from "./Reviews.module.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import CardReview from "./CardReview/CardReview";
import Rating from "react-rating";
import starEmpty from "../../image/Star5.png";
import starFull from "../../image/Star1.png";
import Button from "../Button/Button";
import { SampleNextArrow, SamplePrevArrow } from "../Arrows/SampleArrow";
import Layout from "../Layout/Layout";
import {  useSelector } from "react-redux";

function Reviews() {
  const contentInterface = useSelector(state => state.translation.language);
  const endpoint = "https://api2.praguecoolpass.com/review/approved";
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const data = await axios.get(endpoint);
    setReviews(data.data);
  }

  useEffect(() => {
    getReviews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className={classes.Header}>
        <h3 className={classes.Title}>
          {contentInterface.REVIEWS_what_do_customers_say}
        </h3>

        <div className={classes.Rating}>
          <span className={classes.Rating__Count}> 4.8</span>
          <Rating
            readonly={true}
            initialRating="4"
            emptySymbol={
              <img src={starEmpty} className={classes.Icon} alt="emptyStar" />
            }
            fullSymbol={
              <img src={starFull} className={classes.Icon} alt="fullStar" />
            }
          />
        </div>
      </div>
      <Slider {...settings} className={classes.Slider}>
        {reviews.map((review, index) => {
          while (index <= 14) {
            return (
              <CardReview
                key={index}
                title={review.title}
                text={review.text}
                rating={review.rating}
                date={review.date}
                name={review.name}
                place={review.place}
              />
            );
          }
        })}
      </Slider>
      <div style={{ float: "right" }}>
        <Button
          text={contentInterface.REVIEWS_see_all}
          style={{
            background: "white",
            color: "black",
            border: "solid 1px black",
            borderRadius: "5px",
            marginRight: "8px",
          }}
        />
        <Button
          text={contentInterface.REVIEWS_write_your_opinion}
          style={{
            background: "white",
            color: "black",
            border: "solid 1px black",
            borderRadius: "5px",
            marginRight: "15px",
          }}
        />
      </div>
    </Layout>
  );
}

export default Reviews;
