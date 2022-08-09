import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./Benefits.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import mobile from "../../image/mobile.png";
import card from "../../image/PragueCard_2019_002 1.png";
import Layout from "../Layout/Layout";

function Benefits() {
  const endpoint =
    "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b";
  const [benefits, setBenefits] = useState([]);
  const [isActive, setIsActive] = useState(false);

  async function getBenefits() {
    const data = await axios.get(endpoint);
    setBenefits(data.data.content.en.benefits.items);
  }

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <Layout>
      <div className={classes.Wrapper}>
        <div className={classes.Content}>
          <h3 className={classes.Title}>
            EXPERIENCE PRAGUE WITH COOLPASS BENEFITS
          </h3>
          {benefits.map((el, index) => {
            const title = el.title;
            const text = el.text;

            return (
              <div key={index}>
                <div
                  className={classes.TitleBenefit}
                  data-index={index}
                  onClick={(e) => {
                    const currentTab = +e.target.dataset.index;
                    setIsActive(currentTab);
                  }}
                >
                  {title}
                </div>
                {(!isActive && index === 0) || isActive === index ? (
                  <div className={classes.TextBenefit}>
                    {convertHtmlToReact(text)}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className={classes.Images}>
          <img src={mobile} alt="mobile" className={classes.Mobile} />
          <img src={card} alt="card" className={classes.Card} />
        </div>
      </div>
    </Layout>
  );
}

export default Benefits;
