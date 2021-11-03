import axios from 'axios';
import { token } from './config';


export const GetAllTasks = () => {
    return axios({
        method: "get",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            Authorization : `Bearer ${token}`
        },
    });
}