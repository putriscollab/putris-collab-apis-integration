import axios from 'axios';
const KEY = 'AIzaSyAehStmBgoCrrukfEzlm4A1-Z-H2dYUN6E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})