import axios from "axios";

const KEY = 'AIzaSyBAlbEkd8ZAhrmR3whfpo0TwEsSJ3Sc9a8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5
    }
})