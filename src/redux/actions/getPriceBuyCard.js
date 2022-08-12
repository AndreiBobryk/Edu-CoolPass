import axios from "axios";
import { setBuyCardContent } from "../reducer";



export const getPriceBuyCard = () => {
    return async (dispatch) => {
        const response = await axios.get("https://api2.praguecoolpass.com/cardCategories?eshopId=77a85a2a-6b84-4d79-b856-dfafc14340a0");
        dispatch(setBuyCardContent(response.data.cards))
    }

}