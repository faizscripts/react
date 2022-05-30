import {QUERY_SEARCH} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case QUERY_SEARCH:
            return [...action.payload]
        default:
            return state
    }
}