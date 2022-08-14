import React from "react";
import CardOffer from "./CardOffer/CardOffer";
import classes from "./CoolPassIncludes.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import Layout from "../Layout/Layout";
import {  useSelector } from "react-redux";

function CoolPassIncludes() {
  const contentInterface = useSelector(state => state.translation.language);
  const { HOME_offers_title } = contentInterface;
  const images =useSelector(state => state.translation.imagesCoolPassIIncludes)
  const content =useSelector(state => state.translation.contentCoolPassIIncludes)

  return (
    <Layout/*  style={{ paddingLeft:'60px', paddingRight:'60px'}} */>
      <h3 className={classes.Title}>
        {HOME_offers_title}
      </h3>
      <div className={classes.Wrapper}>
      {images.map((image, index) => {
        const description = content[index]?.features_list;
        const title = content[index]?.title;
        const textButton = content[index]?.button_text;
        return (
          <CardOffer
            image={image}
            key={index}
            title={title}
            description={convertHtmlToReact(description)}
            textButton={textButton}
          />
        );
      })}
      </div>
    
    </Layout>
  );
}

export default CoolPassIncludes;
