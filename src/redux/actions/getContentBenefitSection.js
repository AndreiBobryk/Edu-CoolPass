import axios from "axios";
import { setContentBenefitSection } from "../reducer";


export const getContentBenefitSection = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b");
        dispatch(setContentBenefitSection(response.data.content[lang].benefits.items))
    }

}