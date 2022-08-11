import axios from "axios";
import { setContentTopAttractionsSection } from "../reducer";

export const getContentTopAttractionsSection = () => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/object/attraction/top-attractions");
        dispatch(setContentTopAttractionsSection(response.data))
    }

}