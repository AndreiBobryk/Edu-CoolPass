import axios from "axios";
import { setContentMainSection } from "../reducer";

export const getContentMainSection = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setContentMainSection(response.data.content[lang]))
    }

}