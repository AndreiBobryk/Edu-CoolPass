import React, { useState } from "react";
import classes from "./Benefits.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import mobile from "../../image/mobile.png";
import card from "../../image/PragueCard_2019_002 1.png";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";

function Benefits() {
  const contentInterface = useSelector((state) => state.translation.language);
  const contentBenefitsSection = useSelector(
    (state) => state.translation.benefits
  );
  const [isActive, setIsActive] = useState(false);

  return (
    <Layout>
      <h3 className={classes.Title}>{contentInterface.HOME_benefits_title}</h3>
      <div className={classes.Wrapper}>
        <div className={classes.Content}>
          {contentBenefitsSection.map((el, index) => {
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
        <div className={classes.Images__Static}>
          <div className={classes.Images}>
            <img src={mobile} alt="mobile" className={classes.Mobile} />
            <img src={card} alt="card" className={classes.Card} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Benefits;
