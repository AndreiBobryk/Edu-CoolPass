import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import classes from "./TopAttractions.module.css";
import axios from "axios";
import {SampleNextArrow, SamplePrevArrow} from "../Arrows/SampleArrow";
import {ReactComponent as Heart} from "../../image/svg/heart.svg"
import Layout from "../Layout/Layout";

function TopAttractions() {
  const endpoint =
    "https://api2.praguecoolpass.com/object/attraction/top-attractions";

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getTopAttractions();
  }, []);

  const settings = {
    dots: false,
    // centerPadding: '20px',
    // centerMode: true,
    // infinite: true,
    // variableWidth: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
         
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
         
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  async function getTopAttractions() {
    const data = await axios.get(endpoint);
    setAttractions(data.data);
  }


  return (
    <Layout>
      <h3 className={classes.Title}>TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS</h3>
      <Slider {...settings}>
        {attractions.map((el, index) => {
          const url = "https://static2.praguecoolpass.com/" + el.images[0];
          const title = el.content.en.title;
          const subTitle = el.content.en.subtitle;
          return (
            <div className={classes.Card} key={index} style={{width:'auto'}}>
              <a href="/">
              <img
                src={url}
                alt="attraction"
                style={{
                  maxWidth: "270px",
                  height: "204px",
                  borderRadius: "10px",
                  // marginRight: "10px"
                  // // margin: "0 10px",
                }}
              />
              <div className={classes.Content}>
                <p className={classes.TitleCard}>
                  {title}
                  <br />
                  <span className={classes.SubtitleCard}>{subTitle}</span>
                </p>
              </div>
              <span className={classes.Label}>INCLUDED with CoolPass</span>
              <span className={classes.Icon}
                     >
              <Heart 

              />
              </span>
              </a>
            </div>
          );
        })}
      </Slider>
    </Layout>
  );
}

export default TopAttractions;
