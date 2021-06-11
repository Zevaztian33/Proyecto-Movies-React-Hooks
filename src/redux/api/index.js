import axios from "axios";

const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1855d3d3';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
})