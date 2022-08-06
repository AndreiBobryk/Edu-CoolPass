import axios from "axios";
import React, {useState, useEffect} from "react";
import Button from "../Button/Button";
import Article from "./Article/Article";
import classes from "./LatestNews.module.css";


function LatestNews () {
    const endpoint = 'https://api2.praguecoolpass.com/news'

    const [articlesContent, setArticlesContent] = useState([]);

    async function getArticles () {
        const data = await axios.get(endpoint);
        setArticlesContent(data.data)
        console.log('dataArt', data.data);
        
    }

    useEffect (()=>{
        getArticles()
    }, [])


    return (
        <section className={classes.Wrapper}>
            <h3 className={classes.Title}>LATEST NEWS</h3>
            {articlesContent.map((article, index)=> {
                const title = article.content.en.title;
                const description = article.content.en.text;
                const styleRows = index % 2 ? 'row-reverse' : 'row';
               return index <=1 ? <Article image={article.images[0]} key={index} title={title} description ={description} style={styleRows}/> : null;
            })}
            <div className={classes.Button}>
            <Button text="SEE ALL NEWS" style={{width:"228px", height:"48px"}}/>
            </div>
          
        </section>
    )


}


export default LatestNews;