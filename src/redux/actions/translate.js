import axios from "axios";
import { setLanguage } from "../reducer";

export const getTranslate = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/translation");
        dispatch(setLanguage(response.data[lang]))
    }

}