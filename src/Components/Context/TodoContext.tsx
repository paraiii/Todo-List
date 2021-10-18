import { ChangeEvent, createContext, useState } from "react";
import styled from "styled-components";
import { InputContent, InputDescription, InputCategory, TodoItem, ItodoList } from "../types";


interface TodoContextProp {
    children: any;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    id: number,
    desc: InputDescription,
    category: InputCategory;
    content: string;
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: number) => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    id: 1,
    desc: '',
    category: '',
    content: '',
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id:number) => {},
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')
    const [todoList, setTodoList] = useState<ItodoList[]>([]);


    const addTodo = (): void => {

        const newTodo = { desc: inputDesc, category: inputCate, content: inputCont};
        setTodoList([...todoList, newTodo]);
        setInputDesc("");
        setInputCate("");
        setInputCont("");
    };

    const removeTodo = (TodoNameDelete: string): void => {
        setTodoList (
            todoList.filter((inputDesc)=> {
                return inputDesc.desc != TodoNameDelete;
            })
        );
    };

    const values = {
        todoList: [],
        id:Math.floor(Math.random() * 1000),  //给todolist的事随机分配一个0-1000的数做id
        desc: inputDesc,
        category: inputCate,
        content: inputCont,
        add: addTodo,
        remove: removeTodo
    };
    
    return (
        <TodoContext.Provider value={values}>
        {/* <TodoContext.Provider value={{values, addTodo, removeTodo}}> */}
            {children}
        </TodoContext.Provider>
    );
}

