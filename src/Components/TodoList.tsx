import { useContext } from "react";
import styled from "styled-components";
import {TodoContext} from './Context/TodoContext';
import { TodoItem } from "./types";
import { InputTodo } from "./InputTodo";

export const TodoList = () => {
    const { todoList, removeTodo } = useContext(TodoContext);

    return (
        <ListTable>
            <thead>
                <tr>
                    <HeaderItem><button>Delete Select</button></HeaderItem>
                    <HeaderItem>Description</HeaderItem>
                    <HeaderItem>Category</HeaderItem>
                    <HeaderItem>Content</HeaderItem>
                    <HeaderItem>Operate</HeaderItem>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todoItem: TodoItem) => {
                    return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
                })}
            </tbody>
        </ListTable>
    );
    
}


const ListTable = styled.div`
    padding: 10px;
`
const HeaderItem = styled.th`
    padding: 10px;
`