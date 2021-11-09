import axios from 'axios';
import { config, token } from './config';


export const GetAllTasks = () => {
    return axios({
        method: "get",
        // url: "https://api-nodejs-todolist.herokuapp.com/task",
        url: `${config["baseUrl"]}/task`,
        headers: {
            Authorization : `Bearer ${token()}`
        },
    });
}