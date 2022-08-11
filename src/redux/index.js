import { combineReducers, createStore, applyMiddleware } from "redux";
import translationReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    translation: translationReducer,
})


export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));