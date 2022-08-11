import React from "react";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import Article from "./Article/Article";
import classes from "./LatestNews.module.css";
import {  useSelector } from "react-redux";

function LatestNews() {
  const contentInterface = useSelector(state => state.translation.language);
  const articlesContent = useSelector(state => state.translation.latestNews);

  return (
    <Layout>
      <h3 className={classes.Title}>{contentInterface.HOME_news_title}</h3>
      {articlesContent.map((article, index) => {
        const title = article.content.en.title;
        const description = article.content.en.text;
        const styleRows = index % 2 ? "row-reverse" : "row";
        return index <= 1 ? (
          <Article
            image={article.images[0]}
            key={index}
            title={title}
            description={description}
            style={styleRows}
          />
        ) : null;
      })}
      <div className={classes.Button}>
        <Button
          text={contentInterface.SEE_ALL_NEWS}
          style={{ minWidth: "228px", height: "48px" }}
        />
      </div>
    </Layout>
  );
}

export default LatestNews;
