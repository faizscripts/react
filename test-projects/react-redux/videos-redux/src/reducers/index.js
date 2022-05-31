import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import fetchVideosReducer from "./fetchVideosReducer";

export default combineReducers({
    form: formReducer,
    videos: fetchVideosReducer
})