import axios from 'axios';
const KEY = 'AIzaSyCb-j4GnvcX_2LxiSyOy7uXkbc80ZpG280';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=&key=AIzaSyCb-j4GnvcX_2LxiSyOy7uXkbc80ZpG280
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
})