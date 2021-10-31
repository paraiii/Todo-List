import axios from 'axios';

export const AddTask = () => {
    return axios({
        method: "post",
        url: "https://api-nodejs-todolist.herokuapp.com/task",
        headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlNzBjMjgxMzY0MDAwMTc3MjM1ZjciLCJpYXQiOjE2MzU2NzYzNTV9.jv6rKpsOfNz67WWufUqP7JIIz7yxHNAdMQFofRDWoSA'
        },
        data: {
            id: "617e7e9c8136400017723611",
            description: "reading book",
        }
    });
}
