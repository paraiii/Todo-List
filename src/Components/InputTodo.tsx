import styled from "styled-components";
import { TodoItem } from "./types";


interface Props {
    todoItem: TodoItem;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ todoItem, removeTodo}: Props) => {
    return (
        <tr>
            <th>
                {<input type="checkbox" 
                // key={todo.id} onChange={(e) =>
                //             {handleCheckbox(e, todo.id)}} 
                />}
            </th>
            <th>{todoItem.desc}</th>
            <th>{todoItem.category}</th>
            <th>{todoItem.content}</th>
            <DeleteButton onClick={() => {
                removeTodo(todoItem.id);
                }}>
                    Delete
            </DeleteButton>
        </tr>
)};

const DeleteButton = styled.a`
    margin: 10px;
    cursor: pointer;
    color: crimson;
`