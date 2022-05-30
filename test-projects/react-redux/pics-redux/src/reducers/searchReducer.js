import {SUBMIT_SEARCH} from "../actions/types";

export default (state = "", action) => {
    switch (action.type) {
        case SUBMIT_SEARCH:
            return action.payload
        default:
            return state
    }
}