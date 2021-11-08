import axios from 'axios';
import { token } from './config';

interface RegisterData {
    name: string;
    username: string;
    password: string;
    age: number;
}
export const RegisterUser = (data: RegisterData) => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/user/register",
        headers: {
            Authorization : `Bearer ${token()}`
        },
        data: data
    });
}