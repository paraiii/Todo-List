import { useSnackbar } from "notistack";
import { createContext, useCallback, useEffect, useState } from "react";
import { AddTask } from "../API/AddTask";
import { DeleteTask } from "../API/DeleteTask";
import { GetAllTasks } from "../API/GetAllTasks";
import { TodoDto, TodoItem } from "../types";

interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    loading: boolean;
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
    handleCheck: (id: string, checked: boolean) => void;
    todoCompleted: (id: string, done: boolean) => void;
    handleDelete: () => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    loading: false,
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
    handleCheck: (id: string, checked: boolean) => {},
    todoCompleted: (id: string, done: boolean) => {},
    handleDelete: () => {},
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);      
    const { enqueueSnackbar } = useSnackbar();
    // const { authenticated, setAuthenticated} = useState(false);
    
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
        addTodo: addTodo,
        removeTodo: removeTodo,
        handleCheck: handleCheck,
        todoCompleted: todoCompleted,
        handleDelete: handleDelete,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}

function enqueueSnackbar(arg0: string) {
    throw new Error("Function not implemented.");
}

