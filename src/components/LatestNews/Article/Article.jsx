import React from "react";
import classes from "./Article.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";

function Article (props) {
   const url = "https://static2.praguecoolpass.com/" + props.image;

   const description = convertHtmlToReact(props.description.slice(0, 575) + '...</p>');
   const style = {flexDirection: props.style}

    return (
        <div className={classes.Wrapper} style={style}>
            <div>
                <img src={url} alt="newsImage" className={classes.Image} />
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
