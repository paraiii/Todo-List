import { createContext, useCallback, useEffect, useState } from "react";
import { AddTask } from "../API/AddTask";
import { GetAllTasks } from "../API/GetAllTasks";
import { TodoItem } from "../types";

interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
    handleCheck: (id: string, checked: boolean) => void;
    handleDelete: () => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
    handleCheck: (id: string, checked: boolean) => {},
    handleDelete: () => {},
}

export const TodoContext = createContext(initialValue);
const KEY = "paraiii-todo-list";
export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    const storage = window.localStorage;
    const storedList = storage.getItem(KEY) || "[]"
    // const [todoList, setTodoList] = useState<TodoItem[]>(JSON.parse(storedList));
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    useEffect (() => {
    //     storage.setItem(KEY, JSON.stringify(todoList));
    // }, [todoList])
        //每当todolist改变时，把东西存到storage里
        // AddTask().then(res => {
        //      setTodoList(res.data)
        //      debugger
        // })


        GetAllTasks().then(res => {
            setTodoList(res.data)
       })
    }, [todoList])


    const addTodo = (todo: TodoItem): void => {
        setTodoList([...todoList, todo]);

    };

    const removeTodo = (id: string): void => {
        setTodoList (
            todoList.filter((item)=> {
                return item.id !== id;
            })
        );
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

    const handleDelete = useCallback (() => {
        const filteredTodoList = todoList.filter((todoItem) => todoItem.checked === false);
        debugger
        setTodoList(filteredTodoList);
    }, [todoList]);

    const values: TodoContextValue = {
        todoList: todoList,
        addTodo: addTodo,
        removeTodo: removeTodo,
        handleCheck: handleCheck,
        handleDelete: handleDelete,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}

