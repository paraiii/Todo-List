import axios from 'axios';
import { TodoDto } from '../types';
import { token, token1 } from './config';

export const AddTask = (data: Partial<TodoDto>) => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            // Authorization : `Bearer ${token}`
            Authorization : `Bearer ${token1}`
            // Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGI5ZmRkNjM1OTAwMTcyZTc1YjciLCJpYXQiOjE2MzU5NDUzODN9.ZMhjwkehTKQR1kshYnjaa8YPkhzwK43_oZ2tyGRtIu8"
        },
        data: data //data必须是个string
    });
}
