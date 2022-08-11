import axios from "axios";
import { setHowToUseContent, setHowToUseImages } from "../reducer";



export const getImagesHowToUse = () => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setHowToUseImages(response.data.how_to_use.web_images))
    }

}
export const getContentHowToUse = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setHowToUseContent(response.data.content[lang].how_to_use.descriptions))
    }

}