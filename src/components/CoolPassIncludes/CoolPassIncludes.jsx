import axios from "axios";
import React, { useState, useEffect } from "react";
import CardOffer from "./CardOffer/CardOffer";
import classes from "./CoolPassIncludes.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import Layout from "../Layout/Layout";
import {  useSelector } from "react-redux";

function CoolPassIncludes() {
  const contentInterface = useSelector(state => state.translation.language);
  const endpoint =
    "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b";
  const [offers, setOffers] = useState([]);
  const [content, setContent] = useState([]);

  async function getOffers() {
    const data = await axios.get(endpoint);
    setOffers(data.data.offers.web_images);
    setContent(data.data.content.en.offers.items);
  }

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <Layout style={{ paddingLeft:'60px', paddingRight:'60px'}}>
      <h3 className={classes.Title}>
        {contentInterface.HOME_offers_title}
      </h3>
      {offers.map((offer, index) => {
        const description = content[index].features_list;
        const title = content[index].title;
        const textButton = content[index].button_text;
        return (
          <CardOffer
            image={offer}
            key={index}
            title={title}
            description={convertHtmlToReact(description)}
            textButton={textButton}
          />
        );
      })}
    </Layout>
  );
}

export default CoolPassIncludes;
