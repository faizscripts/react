import {SELECT_ITEM, SEARCH, SELECT_OPTION, OPEN} from "./types";
import axios from "axios";

export const selectItem = (index) => {
    return {
        type: SELECT_ITEM,
        payload: index
    }
}

export const wikiSearch = (searchTerm) => {
    return async (dispatch) => {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${searchTerm}`)

        dispatch({type: SEARCH, payload: response.data.query.search})
    }
}

export const selectOption = (option) => {
    return{
        type: SELECT_OPTION,
        payload: option
    }
}

export const setOpen = (open) => {
    return{
        type: OPEN,
        payload: open
    }
}