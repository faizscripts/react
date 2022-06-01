import {SELECT_OPTION} from "../actions/types";

export default (state = 0, action) => {
    switch (action.type) {
        case SELECT_OPTION:
            return action.payload
        default:
            return state
    }
}