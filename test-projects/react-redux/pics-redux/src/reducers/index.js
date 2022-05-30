import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import querySearchReducer from "./querySearchReducer";
import spansReducer from "./spansReducer";

export default combineReducers({
    form: formReducer,
    images: querySearchReducer,
    spans: spansReducer
})