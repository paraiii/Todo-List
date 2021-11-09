import axios from 'axios';
import { config, token } from './config';

export const DeleteTask = (id: string) => {
    return axios({
        method: "delete",
        // url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        url: `${config["baseUrl"]}/task/${id}`,
        headers: {
            Authorization : `Bearer ${token()}`
        },
    });
}