import axios from "axios";
import { setLatestNewsContent } from "../reducer";



export const getContentLatestNews = () => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/news");
        dispatch(setLatestNewsContent(response.data))
    }

}