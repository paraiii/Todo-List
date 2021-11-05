
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
        <div>
            {todoItem.done ? (
                <tr>
                <TodoCompletedContainer onClick={() => todoCompleted(todoItem.id, todoItem.done)}>
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
                </TodoCompletedContainer>
                </tr>
            ): (
                <tr>
                <InputTodoContainer onClick={() => todoCompleted(todoItem.id, todoItem.done)}>
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
                </InputTodoContainer>
                </tr>
            )}
        </div>
    );
};


const InputTodoContainer = styled.tr`
    color: black;
`
const TodoCompletedContainer = styled.div`
    color: grey;
    text-decoration: line-through;
`
const DeleteButton = styled.div`
    margin: 10px;
    cursor: pointer;
    color: crimson;
`

