import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./Context/TodoContext";
import { TodoItem } from "./types";


interface Props {
    todoItem: TodoItem;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ todoItem, removeTodo}: Props) => {
    const { handleCheck } = useContext(TodoContext);

    return (
        <InputTodoTr>
            <th>
                <input
                    onChange={() => handleCheck(todoItem.id, todoItem.checked)}
                    type="checkbox"
                    checked={todoItem.checked}
                />
            </th>
            <td>
                <a href= {`/about/${todoItem.content}`}>{todoItem.desc}</a>
            </td>
            <td>{todoItem.category}</td>
            <DeleteButton onClick={() => {
                removeTodo(todoItem.id);
            }}>
                Delete
            </DeleteButton>
        </InputTodoTr>
    );
};


const DeleteButton = styled.a`
    margin: 10px;
    cursor: pointer;
    color: crimson;
`
const InputTodoTr = styled.tr`
    border-bottom: 1px;
`


