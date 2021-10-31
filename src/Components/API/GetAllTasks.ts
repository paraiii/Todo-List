import axios from 'axios';


export const GetAllTasks = () => {
    return axios({
        method: "get",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlNzBjMjgxMzY0MDAwMTc3MjM1ZjciLCJpYXQiOjE2MzU2NzYzNTV9.jv6rKpsOfNz67WWufUqP7JIIz7yxHNAdMQFofRDWoSA'
        },
    });
}