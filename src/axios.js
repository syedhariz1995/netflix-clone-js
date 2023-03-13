import axios from "axios";

/** Base url to make requests to the movie databsse. The GET request will be put at the end of baseURL (from requests.js) **/


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance