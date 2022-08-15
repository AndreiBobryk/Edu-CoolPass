import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import classes from "./Carousel.module.css";

function CarouselMain() {
  const [image, setImage] = useState([]);
  const [author, setAuthor] = useState([]);

  const endpointsImage =
    "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b";

  async function getSlides() {
    const data = await axios.get(endpointsImage);
    console.log('data', data.data.mainImage.author)
    setImage(data.data.mainImage.web_image);
    setAuthor(data.data.mainImage.author)
  }

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      dynamicHeight={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch
    >
      {image.map((img) => {
        const url = "https://static2.praguecoolpass.com/" + img;
       
        return (
          <div className={classes.Wrapper}>
            <img src={url} alt="slide-img" className={classes.Img} />
            <p className={classes.Author}>{author}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselMain;
