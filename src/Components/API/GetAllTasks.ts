import axios from 'axios';
import { token } from './config';


export const GetAllTasks = () => {
    return axios({
        method: "get",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGI5ZmRkNjM1OTAwMTcyZTc1YjciLCJpYXQiOjE2MzU5NDUzODN9.ZMhjwkehTKQR1kshYnjaa8YPkhzwK43_oZ2tyGRtIu8"
        },
    });
}