import React from "react";
import classes from "./Article.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";


function Article (props) {
   const url = "https://static2.praguecoolpass.com/" + props.image;

   const description = convertHtmlToReact(props.description.slice(0, 575) + '...</p>');
   const objDate = new Date(props.date);
   const fullYear = objDate.getFullYear();
   let month = objDate.getMonth() +1;
   let day = objDate.getDate();

   if (day < 10) day = '0' + day;
   if (month < 10) month = '0' + month;
   
   const date = day + '.' + month + '.' + fullYear;



    return (
        <div className={classes.Wrapper} >
            <div className={classes.WrapImag}>
                <img src={url} alt="newsImage" className={classes.Image} />
                <p className={classes.Date}>{date}</p>
            </div>
            <div className={classes.Content}>
                <h4 className={classes.Title}>{props.title}</h4>
                <p className={classes.Description}>{description}</p>
                <div style={{textAlign: 'left'}}><a href="/" className={classes.Link}>see more</a></div>
            </div>
        </div>
    )


}


export default Article;
