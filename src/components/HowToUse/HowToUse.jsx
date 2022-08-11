import axios from "axios";
import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import CardStep from "./CardStep/CardStep";
import classes from "./HowToUse.module.css";
import {  useSelector } from "react-redux";

function HowToUse() {
  const contentInterface = useSelector(state => state.translation.language);
  const images = useSelector(state => state.translation.imagesHowToUse);
  const content = useSelector(state => state.translation.contentHowToUse);

  return (
    <Layout>
      <h3 className={classes.Title}>
        {contentInterface.HOME_offers_title}
      </h3>
      <div className={classes.WrapperCard}>
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
      </div>
    </Layout>
  );
}

export default HowToUse;
