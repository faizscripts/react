import {FETCH_VIDEOS} from "./types";
import youtube from "../apis/youtube";

export const fetchVideos = (term) => {
    return async (dispatch) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        console.log(response.data.items);

        dispatch({type: FETCH_VIDEOS, payload: response.data.items})
    }
}