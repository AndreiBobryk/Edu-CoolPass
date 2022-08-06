import axios from "axios";
import React, {useState, useEffect} from "react";
import CardStep from "./CardStep/CardStep";
import classes from "./HowToUse.module.css"

function HowToUse () {
    const endpoint = 'https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b';
    const [contentStepsImages, setContentStepsImages] = useState([]);
    const [contentStepsDescriptions, setContentStepsDescriptions] = useState([]);
    async function getStepsInfo () {
        const data = await axios.get(endpoint);
        const pathImages = data.data.how_to_use.web_images
        const pathDescriptions = data.data.content.en.how_to_use.descriptions
        setContentStepsImages(pathImages);
        setContentStepsDescriptions(pathDescriptions);

    }
    useEffect (()=>{
        getStepsInfo();
    }, [])

return (
    <section id="HowToUse" className={classes.Wrapper}>
    <h3 className={classes.Title}>HOW TO USE PRAGUE COOLPASS — FEW EASY STEPS</h3>
    <div className={classes.WrapperCard}>
    {contentStepsImages.map((image, index) => {
        return <CardStep image={image} index={index+1} description={contentStepsDescriptions[index]} key={index} />
    })}
    </div>
   
    </section>
)

}

export default HowToUse;