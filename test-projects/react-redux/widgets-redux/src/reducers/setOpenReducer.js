import {OPEN} from "../actions/types";

export default (state = false, action) => {
    switch (action.type) {
        case OPEN:
            return action.payload
        default:
            return state
    }
}