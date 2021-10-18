import { createContext, useState } from "react";
import styled from "styled-components";
import { InputContent, InputDescription, InputCategory, TodoItem } from "../types";


interface TodoContextProp {
    children: any;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    id: number,
    desc: InputDescription[],
    category: InputCategory[];
    content: string[];
    actions: {
        add: (todo: TodoItem) => void;
        remove: (id: number) => void;
    }
}
export const initialValue: TodoContextValue = {
    todoList: [],
    id: 1,
    desc: [],
    category: [],
    content: [],
    actions: {
        add: (todo:TodoItem)=>{},
        remove: (id:number) => {},
    }
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
        const {children} = props;
        const [inputDesc, setInputDesc] = useState([
            {description: "1"},
            {description: "2"}
        ]);
        const [inputCate, setInputCate] = useState([
        ]); 
        
        const [inputCont, setInputCont] = useState(['']); 
    
        const [todos, setTodos] = useState([]);
    

        const addTodo = (todo: any) => {
        // const newTodos = [todo, ...todos];
        // setTodos(newTodos);
            const newInputDesc = [todo, ...todos]
            setInputDesc(newInputDesc);
        };

        const removeTodo = (id: any) => {
            // const removeArr = [...todos].filter(todo => todo.id !== id);
            // setTodos(removeArr);
        };

        const values = {
            todoList: [],
            id:Math.floor(Math.random() * 1000),  //给todolist的事随机分配一个0-1000的数做id
            desc: inputDesc,
            category: inputCate,
            content: inputCont,
            actions: {
                add: addTodo,
                remove: removeTodo
            }
        };
    
    
        return (
            <TodoContext.Provider value={values}>
                {children}
            </TodoContext.Provider>
        );
    }
    
