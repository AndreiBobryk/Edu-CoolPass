import axios from "axios";
import { setCoolPassIncludesContent, setCoolPassIncludesImages } from "../reducer";

export const getCoolPassIncludesImages = () => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setCoolPassIncludesImages(response.data.offers.web_images))
    }

}

export const getCoolPassIncludesContent = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setCoolPassIncludesContent(response.data.content[lang].offers.items))
    }

}
