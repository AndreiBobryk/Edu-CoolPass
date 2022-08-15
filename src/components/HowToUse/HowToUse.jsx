
import React, {useEffect} from "react";
import Layout from "../Layout/Layout";
import CardStep from "./CardStep/CardStep";
import classes from "./HowToUse.module.css";
import {  useSelector } from "react-redux";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Arrows/SampleArrow";

function HowToUse() {
  const contentInterface = useSelector(state => state.translation.language);
  const images = useSelector(state => state.translation.imagesHowToUse);
  const content = useSelector(state => state.translation.contentHowToUse);


  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          dots: true,
          arrows: true, 
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          nextArrow: <SampleNextArrow />,
           prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: true,
          nextArrow: <SampleNextArrow />,
           prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
          arrows: false, 
          nextArrow: null,
          prevArrow: null,
          className: classes.CardStep,
          dots: true,
       
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
          nextArrow: null,
          prevArrow: null,
          className: classes.CardStep,
          dots: true,
       
        },
      },
    ],
  };




  return (
    <Layout>
      <h3 className={classes.Title}>
        {contentInterface.HOME_how_to_use_title}
      </h3>
      { images.length && <Slider {...settings} >
        {images.map((image, index) => {
          return (
            <CardStep
              image={image}
              index={index + 1}
              description={content[index]}
              key={index}
            />
          );
        })}
      </Slider>}
    </Layout>
  );
}

export default HowToUse;
