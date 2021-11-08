import axios from 'axios';

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
        data: data
    });
}