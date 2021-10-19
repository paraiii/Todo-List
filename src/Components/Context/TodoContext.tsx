import { ChangeEvent, createContext, useState } from "react";
import styled from "styled-components";
import { TodoItem } from "../types";


interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    // const [inputDesc, setInputDesc] = useState<string>('')
    // const [inputCate, setInputCate] = useState<string>('')
    // const [inputCont, setInputCont] = useState<string>('')
    const [todoList, setTodoList] = useState<TodoItem[]>([]);


    const addTodo = (todo: TodoItem): void => {
        setTodoList([...todoList, todo]);
    };

    const removeTodo = (id: string): void => {
        setTodoList (
            todoList.filter((item)=> {
                return item.id != id;
            })
        );
    };

    const values: TodoContextValue = {
        todoList: todoList,
        // id:Math.floor(Math.random() * 1000),  //给todolist的事随机分配一个0-1000的数做id
        // desc: inputDesc,
        // category: inputCate,
        // content: inputCont,
        addTodo: addTodo,
        removeTodo: removeTodo
    };
    
    return (
        // <TodoContext.Provider value={values}>
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}

