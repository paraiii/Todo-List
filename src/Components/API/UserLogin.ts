import axios from 'axios';
import { token } from './config';

interface LoginData {
    username: string;
    password: string;
}

export const UserLogin = (data: LoginData) => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/user/login",
        // headers: {
        //     Authorization : `Bearer ${token}`
        // },
        data: data
    });
}