import React from "react";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import Article from "./Article/Article";
import classes from "./LatestNews.module.css";
import {  useSelector } from "react-redux";
import Alert from "../Alert/Alert";

function LatestNews() {
  const contentInterface = useSelector(state => state.translation.language);
  const articlesContent = useSelector(state => state.translation.latestNews);

  return (
    <Layout>
      <h3 className={classes.Title}>{contentInterface.HOME_news_title}</h3>
      {articlesContent.map((article, index) => {
        const title = article.content.en.title;
        const description = article.content.en.text;       
        const date = article.publishedOnHomePage;
        return index <= 1 ? (
          <Article
            image={article.images[0]}
            key={index}
            title={title}
            description={description}
            date={date}
           
          />
        ) : null;
      })}
      <div className={classes.Wrap__button}>
        <Button
          text={contentInterface.SEE_ALL_NEWS}
          className={classes.Button}
          onClick={Alert}
        />
      </div>
    </Layout>
  );
}

export default LatestNews;
