import axios from "axios";

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1zf5l5lJZAHMIxHRseDydPkX-3Di_dAquqRweRCv-RQ'
    }
})

export default unsplash

