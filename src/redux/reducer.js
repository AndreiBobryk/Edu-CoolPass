const SET_COUNT = "SET_COUNT";
const SET_LANGUAGE = "SET_LANGUAGE"

const initState = {
    language:{},
    isFetching: true,
    count: 0
}


export default function translationReducer(state = initState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload

            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload

            }



        default:
            return state
    }

}

export const setCount = (count) => ({type: SET_COUNT, payload: count});

export const setLanguage =(language) => ({type:SET_LANGUAGE, payload: language})