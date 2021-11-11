import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./Context/TodoContext";
import { TodoItem } from "./types";

interface Props {
    todoItem: TodoItem;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ todoItem, removeTodo}: Props) => {
    const { handleCheck, todoCompleted } = useContext(TodoContext);

    return (
        <InputTodoContainer done={todoItem.done} onClick={() => todoCompleted(todoItem.id, todoItem.done)}>
            <th>
                <input
                    onChange={() => handleCheck(todoItem.id, todoItem.checked)}
                    type="checkbox"
                    checked={todoItem.checked}
                />
            </th>
            <td>
                <a href= {`/todo/${todoItem.id}`}>{todoItem.desc}</a>
            </td>
            <td>{todoItem.category}</td>
            <DeleteButton onClick={() => {
                removeTodo(todoItem.id);
            }}>
                Delete
            </DeleteButton>
            <CompleteButton>
                Completed
            </CompleteButton>
        </InputTodoContainer>            
    );
};

interface StyledProps {
    done: boolean
}
const InputTodoContainer = styled.tr<StyledProps>`
    color: ${props=> props.done ? "grey": "black"};
    text-decoration: ${props => props.done ?  "line-through" : "none"};
`
const DeleteButton = styled.td`
    margin: 10px;
    cursor: pointer;
    color: crimson;
`

const CompleteButton = styled.td`
    margin: 10px;
    color: crimson;
`
