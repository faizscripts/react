import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {itemsReducer} from "./itemsReducer";
import selectItemReducer from "./selectItemReducer";
import wikiSearchReducer from "./wikiSearchReducer";
import optionsReducer from "./optionsReducer";
import selectOptionReducer from "./selectOptionReducer";
import setOpenReducer from "./setOpenReducer";

export default combineReducers({
    form: formReducer,
    items: itemsReducer,
    selectedItem: selectItemReducer,
    results: wikiSearchReducer,
    options: optionsReducer,
    selectedOption: selectOptionReducer,
    open: setOpenReducer
})