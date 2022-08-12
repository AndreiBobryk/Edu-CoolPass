import axios from "axios";
import { setHeaderContent } from "../reducer";



export const getHeaderMenu = (lang="en") => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/menu");
        const allData = response.data;
        const filterData = allData.filter(el => el.order <= 6 )
        dispatch(setHeaderContent(filterData))
    }

}