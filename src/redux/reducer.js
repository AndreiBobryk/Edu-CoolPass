const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE'
const SET_COUNT = "SET_COUNT";
const SET_LANGUAGE = "SET_LANGUAGE"
const SET_CONTENT_MAIN_SECTION = "SET_CONTENT_MAIN_SECTION"
const SET_CONTENT_TOP_ATTRACTIONS_SECTION = "SET_CONTENT_TOP_ATTRACTIONS_SECTION"
const SET_CONTENT_BENEFITS_SECTION = 'SET_CONTENT_BENEFITS_SECTION'
const SET_IMAGES_COOLPASSINCLUDES_SECTION = 'SET_IMAGES_COOLPASSINCLUDES_SECTION'
const SET_CONTENT_COOLPASSINCLUDES_SECTION = 'SET_CONTENT_COOLPASSINCLUDES_SECTION'
const SET_IMAGES_HOW_TO_USE_SECTION = 'SET_IMAGES_HOW_TO_USE_SECTION'
const SET_CONTENT_HOW_TO_USE_SECTION = 'SET_CONTENT_HOW_TO_USE_SECTION'
const SET_LATEST_NEWS_SECTION = 'SET_LATEST_NEWS_SECTION'
const SET_HEADER_SECTION = 'SET_HEADER_SECTION'
const SET_BUY_CARD_SECTION = 'SET_BUY_CARD_SECTION'

const initState = {
    currentLanguage: 'en',
    language:{},
    isFetching: true,
    count: 0,
    mainSection: {},
    topAttractions: [],
    benefits: [],
    imagesCoolPassIIncludes: [],
    contentCoolPassIIncludes: [],
    imagesHowToUse: [],
    contentHowToUse: [],
    latestNews: [],
    header:[],
    buyCard: []

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
        case SET_IMAGES_COOLPASSINCLUDES_SECTION:
            return {
                ...state,
                imagesCoolPassIIncludes: action.payload

            }
        case SET_CONTENT_COOLPASSINCLUDES_SECTION:
            return {
                ...state,
                contentCoolPassIIncludes: action.payload

            }
        case SET_IMAGES_HOW_TO_USE_SECTION:
            return {
                ...state,
                imagesHowToUse: action.payload

            }
        case SET_CONTENT_HOW_TO_USE_SECTION:
            return {
                ...state,
                contentHowToUse: action.payload

            }
        case SET_LATEST_NEWS_SECTION:
            return {
                ...state,
                latestNews: action.payload

            }
        case SET_HEADER_SECTION:
            return {
                ...state,
                header: action.payload

            }
        case SET_BUY_CARD_SECTION:
            return {
                ...state,
                buyCard: action.payload

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
export const setCoolPassIncludesImages =(imagesCoolPassIIncludes) => ({type:SET_IMAGES_COOLPASSINCLUDES_SECTION, payload: imagesCoolPassIIncludes})
export const setCoolPassIncludesContent =(contentCoolPassIIncludes) => ({type:SET_CONTENT_COOLPASSINCLUDES_SECTION, payload: contentCoolPassIIncludes})
export const setHowToUseImages =(imagesHowToUse) => ({type:SET_IMAGES_HOW_TO_USE_SECTION, payload: imagesHowToUse})
export const setHowToUseContent =(contentHowToUse) => ({type:SET_CONTENT_HOW_TO_USE_SECTION, payload: contentHowToUse})
export const setLatestNewsContent =(latestNews) => ({type:SET_LATEST_NEWS_SECTION, payload: latestNews})
export const setHeaderContent =(header) => ({type:SET_HEADER_SECTION, payload: header})
export const setBuyCardContent =(buyCard) => ({type:SET_BUY_CARD_SECTION, payload: buyCard})