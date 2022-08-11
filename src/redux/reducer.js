const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE'
const SET_COUNT = "SET_COUNT";
const SET_LANGUAGE = "SET_LANGUAGE"
const SET_CONTENT_MAIN_SECTION = "SET_CONTENT_MAIN_SECTION"
const SET_CONTENT_TOP_ATTRACTIONS_SECTION = "SET_CONTENT_TOP_ATTRACTIONS_SECTION"
const SET_CONTENT_BENEFITS_SECTION = 'SET_CONTENT_BENEFITS_SECTION'

const initState = {
    currentLanguage: 'en',
    language:{},
    isFetching: true,
    count: 0,
    mainSection: {},
    topAttractions: [],
    benefits: []
}


export default function translationReducer(state = initState, action) {
    switch (action.type) {
        case SET_CURRENT_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.payload

            }
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
        case SET_CONTENT_MAIN_SECTION:
            return {
                ...state,
                mainSection: action.payload

            }
        case SET_CONTENT_TOP_ATTRACTIONS_SECTION:
            return {
                ...state,
                topAttractions: action.payload

            }
        case SET_CONTENT_BENEFITS_SECTION:
            return {
                ...state,
                benefits: action.payload

            }



        default:
            return state
    }

}
export const setCurrentLanguageGlobal = (currentLanguage) => ({type: SET_CURRENT_LANGUAGE, payload: currentLanguage});
export const setCount = (count) => ({type: SET_COUNT, payload: count});



export const setLanguage =(language) => ({type:SET_LANGUAGE, payload: language})
export const setContentMainSection =(mainSection) => ({type:SET_CONTENT_MAIN_SECTION, payload: mainSection})
export const setContentTopAttractionsSection =(topAttractions) => ({type:SET_CONTENT_TOP_ATTRACTIONS_SECTION, payload: topAttractions})
export const setContentBenefitSection =(benefits) => ({type:SET_CONTENT_BENEFITS_SECTION, payload: benefits})