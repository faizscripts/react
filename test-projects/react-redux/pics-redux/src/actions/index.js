import {SUBMIT_SEARCH, QUERY_SEARCH, SET_SPANS} from "./types";
import unsplash from "../apis/unsplash";

export const submitSearch = (searchTerm) => {
    return {
        type: SUBMIT_SEARCH,
        payload: searchTerm
    }
}

export const querySearch = (searchTerm) => {
    return async (dispatch) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: searchTerm }
        })

        dispatch({type: QUERY_SEARCH, payload: response.data.results})
    }
}

export const setSpans = (spans) => {
    return {
        type: SET_SPANS,
        payload: spans
    }
}