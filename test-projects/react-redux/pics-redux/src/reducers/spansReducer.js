import {SET_SPANS} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case SET_SPANS:
            return [...state, action.payload]
        default:
            return state
    }
}