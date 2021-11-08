import axios from 'axios';
import { TodoDto } from '../types';
import { token } from './config';

export const AddTask = (data: Partial<TodoDto>) => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            Authorization : `Bearer ${token()}`
        },
        data: data //data必须是个string
    });
}
