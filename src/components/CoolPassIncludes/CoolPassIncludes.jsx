import axios from "axios";
import React, {useState, useEffect} from "react";
import CardOffer from "./CardOffer/CardOffer";
import classes from "./CoolPassIncludes.module.css";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";


function CoolPassIncludes () {

    const endpoint = 'https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b'
    const [offers, setOffers]  = useState([]);
    const [content, setContent]  = useState([]);

    async function getOffers () {
        const data = await axios.get(endpoint);
        setOffers(data.data.offers.web_images)
        setContent(data.data.content.en.offers.items)
        // setOffers(data.data.offers.web_images)
        console.log('data', data.data.content.en.offers.items)
    }

    useEffect(()=>{
        getOffers();
    }, [])
    





    return (
    <section className={classes.Wrapper}>
        <h3 className={classes.Title}>ALL-INCLUSIVE OFFER FOR YOUR PRAGUE SIGHTSEEING</h3>
        {offers.map((offer, index) => {
            const description = content[index].features_list;
            const title = content[index].title;
            const textButton = content[index].button_text;
            return <CardOffer image={offer} key={index} title={title} description={convertHtmlToReact(description)} textButton={textButton}/>
        })}


    </section>
    )
}

export default CoolPassIncludes;