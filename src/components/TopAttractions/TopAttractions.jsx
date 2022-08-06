import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import classes from "./TopAttractions.module.css";
import axios from "axios";

function TopAttractions() {
  const endpoint =
    "https://api2.praguecoolpass.com/object/attraction/top-attractions";

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getTopAttractions();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  async function getTopAttractions() {
    const data = await axios.get(endpoint);
    console.log(data, data.data);
    setAttractions(data.data);
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top:"42%"}}
        onClick={onClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_526_735)">
            <path
              d="M4.58508 2.83004L13.7551 12L4.58508 21.17L7.41502 24L19.415 12L7.41502 4.64467e-06L4.58508 2.83004Z"
              fill="#DBDBDB"
            />
          </g>
          <defs>
            <clipPath id="clip0_526_735">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 24) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <section className={classes.Wrapper}>
      <h3 className={classes.Title}>TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS</h3>
      <Slider {...settings}>
        {attractions.map((el) => {
          const url = "https://static2.praguecoolpass.com/" + el.images[0];
          const title = el.content.en.title;
          const subTitle = el.content.en.subtitle;
          console.log('subtitle', subTitle)
          return (
            <div className={classes.Card}>
              <img
                src={url}
                alt="attraction"
                style={{
                  width: "270px",
                  height: "204px",
                  borderRadius: "10px",
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
              <span className={classes.Icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8401 4.61C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.61L12.0001 5.67L10.9401 4.61C9.90843 3.57831 8.50915 2.99871 7.05012 2.99871C5.59109 2.99871 4.19181 3.57831 3.16012 4.61C2.12843 5.64169 1.54883 7.04097 1.54883 8.5C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6054C22.3096 9.93789 22.4519 9.22249 22.4519 8.5C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.61V4.61Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default TopAttractions;
