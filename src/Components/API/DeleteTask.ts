import axios from 'axios';
import { token } from './config';

export const DeleteTask = (id: string) => {
    return axios({
        method: "delete",
        url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        headers: {
            Authorization : `Bearer ${token}`
        },
    });
}