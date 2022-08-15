import React, { useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import classes from "./TopAttractions.module.css";
import { SampleNextArrow, SamplePrevArrow } from "../Arrows/SampleArrow";
import { ReactComponent as Heart } from "../../image/svg/heart.svg";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";

function TopAttractions() {
  const [isHeartFull, setIsHeartFull] = useState(false);
  const contentInterface = useSelector((state) => state.translation.language);
  const {
    ATTRACTIONS_label_included,
    ATTRACTIONS_label_with_pass,
    HOME_top_attractions_title,
  } = contentInterface;
  const attractions = useSelector((state) => state.translation.topAttractions);
  const curLang = useSelector((state) => state.translation.currentLanguage);

  const settings = {
    dots: false,
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
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: false,
        },
      },
    ],
  };

  return (
    <Layout>
      <h3 className={classes.Title}>{HOME_top_attractions_title}</h3>
       <div className={classes.Wrapper}>
      <Slider {...settings}>
        {attractions.map((el, index) => {
          const url = "https://static2.praguecoolpass.com/" + el.images[0];

          const title = el.content[curLang].title;
          const subTitle = el.content[curLang].subtitle;
          return (
            <div
              className={classes.Card}
              key={index}
              style={{ width: "auto" }
            }
            >
              <img
                src={url}
                alt="attraction"
                style={{
                  maxWidth: "270px",
                  height: "204px",
                  borderRadius: "10px",
                }}
              />
              <div className={classes.Content}>
                <div className={classes.TitleCard}>
                  {title}
                  <br />
                  <span className={classes.SubtitleCard}>{subTitle}</span>
                </div>
                <div
                  className={classes.Icon}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsHeartFull(!isHeartFull);
                  }}
                >
                  <Heart />
                </div>
              </div>
              <span className={classes.Label}>
                {ATTRACTIONS_label_included} {ATTRACTIONS_label_with_pass}
              </span>
            </div>
          );
        })}
      </Slider>
      </div>
    </Layout>
  );
}

export default TopAttractions;
