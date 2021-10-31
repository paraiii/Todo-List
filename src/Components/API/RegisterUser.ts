import axios from 'axios';

export const RegisterUser = () => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/user/register",
        data: {
            email: "zhangbingxin324@gmail.com",
            password: "12345678",
        }
    });
}