import { useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {TodoContext} from './Context/TodoContext';
import { InputTodo } from "./InputTodo";
import { TodoItem } from "./types";

export const TodoList = () => {
    const { todoList, removeTodo, authenticated } = useContext(TodoContext);
    const { handleDelete } = useContext(TodoContext);

    if (!authenticated) {
        return <Redirect to= "/login" />
    }

    return (
        <ListTable>
            <thead>
                <tr>
                    <HeaderItem>
                        <button onClick={handleDelete}>Delete Select</button>
                    </HeaderItem>
                    <HeaderItem>Description</HeaderItem>
                    <HeaderItem>Category</HeaderItem>
                    <HeaderItem>Operate</HeaderItem>
                </tr>
            </thead>
            <StyledBody>
                {todoList.map((todoItem: TodoItem) => {
                    return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
                })}
            </StyledBody>
        </ListTable>
    );
}

const ListTable = styled.div`
    padding: 10px;
`
const HeaderItem = styled.th`
    padding: 10px;
`
const StyledBody = styled.tbody`
    cursor: pointer;
`


