import React from "react";
import classes from "./CardReview.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import Rating from "react-rating";
import starEmpty from "../../../image/Star5.png";
import starFull from "../../../image/Star1.png";


const libraryMonth = {
    1:"January",
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December",
}

function CardReview (props) {

    const objDate = new Date(props.date);
    const fullYear = objDate.getFullYear();
    const monthNumber = objDate.getMonth();
    const day = objDate.getDate();
    const month = libraryMonth[monthNumber+1]
    const date = month + ' ' + day + ', ' + fullYear;
    console.log(date)
    let text = props.text;
    console.log(text.length)
    if (text.length > 180) {
        text = text.slice(0, 180) + '... '
        text = `<p>${text}<a href="/" style={{fontWeight:"700"}}>more</a></p>`;
    
        text = convertHtmlToReact(text)


    }

    return (
        <div className={classes.Wrapper}>
            <Rating 
            readonly={true}
            initialRating={props.rating}
            emptySymbol={<img src={starEmpty} className={classes.Icon} alt="emptyStar" />}
            fullSymbol={<img src={starFull} className={classes.Icon} alt="fullStar" />}
            className={classes.Rating}
            />
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Date}>{date}</div>
            <div className={classes.Text}>{text}</div>
            <div className={classes.Author}>{props.name}, {props.place}</div>
        

        </div>
    )
}

export default CardReview;