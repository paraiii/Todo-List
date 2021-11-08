import { useSnackbar } from "notistack";
import { createContext, useCallback, useEffect, useState } from "react";
import { AddTask } from "../API/AddTask";
import { DeleteTask } from "../API/DeleteTask";
import { GetAllTasks } from "../API/GetAllTasks";
import { TodoDto, TodoItem } from "../types";
import {UserLogin} from "../API/UserLogin";
import { RegisterUser } from "../API/RegisterUser";

interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    loading: boolean;
    login: (data: {username: string, password: string}) => void;
    registerUser: (data: {name: string, username: string, password: string}) => void;
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
    handleCheck: (id: string, checked: boolean) => void;
    todoCompleted: (id: string, done: boolean) => void;
    handleDelete: () => void;
    authenticated: boolean;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    loading: false,
    login: (data: {username: string, password: string}) => {},
    registerUser: (data: {name: string, username: string, password: string}) => {},
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
    handleCheck: (id: string, checked: boolean) => {},
    todoCompleted: (id: string, done: boolean) => {},
    handleDelete: () => {},
    authenticated: false,
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);      
    const { enqueueSnackbar } = useSnackbar();
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect (() => {
        const value = window.localStorage.getItem("prefix-token")
        if (value) {
            setAuthenticated(true)
        }
    }, [])
    
    useEffect (() => {
        setLoading(true);
        GetAllTasks().then(res => {
            setLoading(false);
            const todoDtos = res.data.data;
            const todoItems = todoDtos.map((todoDto: TodoDto) => {
                const content: Partial<TodoItem> = JSON.parse(todoDto.description)
                return { ...content, id: todoDto._id}
            })
            setTodoList(todoItems)
       })
    // }, [todoList]); //不能有这个dependency
    }, []);

    const addTodo = (todo: TodoItem): void => {
        const todoDto: Partial<TodoDto> = {
            "description": JSON.stringify(todo)
        }; 
        setLoading(true);
        AddTask(todoDto).then(res => { //点击button之后拿到response
            setLoading(false);
            todo.id = res.data.data._id
            setTodoList([...todoList, todo]);
            enqueueSnackbar('Successfully done the operation.' )            
        });
    };  
    
    const removeTodo = (id: string): void => {
        DeleteTask(id).then(res => {
            setTodoList (
                todoList.filter((item)=> {
                    return item.id !== id;
                })
            );
        })
    };
    
    const Register = (data: any): void => {
        RegisterUser (data).then(res => {
            window.localStorage.setItem("prefix-token", res.data.token);
            console.log(Response);
        })
    ;}

    const Login = (data: any): void => {
        UserLogin (data).then(res => {
            window.localStorage.setItem("prefix-token", res.data.token);
            setAuthenticated(true);
        })
    ;}

    const handleCheck = useCallback ((id:string, checked: boolean) => {
        const modifiedTodoList = todoList.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.checked = !todoItem.checked;
          }
          return todoItem;
        });
        setTodoList(modifiedTodoList);
    }, [todoList]);

    const todoCompleted = (id: string, done: boolean): void => {
        const setList = todoList.map((todoItem)=> {
            if (todoItem.id === id) {
                todoItem.done = !todoItem.done;
            }
            return todoItem;
        });   
        setTodoList(setList);
    };

    const handleDelete = useCallback (() => {
        const filteredTodoList = todoList.filter((todoItem) => todoItem.checked === false);
        setTodoList(filteredTodoList);
    }, [todoList]);

    const values: TodoContextValue = {
        todoList: todoList,
        loading: loading,
        login: Login,
        registerUser: Register,
        addTodo: addTodo,
        removeTodo: removeTodo,
        handleCheck: handleCheck,
        todoCompleted: todoCompleted,
        handleDelete: handleDelete,
        authenticated: authenticated,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}



