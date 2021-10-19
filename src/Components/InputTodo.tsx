import styled from "styled-components";
import { TodoItem } from "./types";


interface Props {
    todoItem: TodoItem;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ todoItem, removeTodo}: Props) => {
    return (
        <div>
            <span>{todoItem.desc}</span>
            <span>{todoItem.category}</span>
            <span>{todoItem.content}</span>
            <button onClick={() => {
                removeTodo(todoItem.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};


const NavContainer = styled.div`
  
`
const TodoListContainer = styled.div`
    display:flex;
    flex-direction: column-reverse;
    color: rgb(0, 0, 0);
    padding-right:100px;
    padding-left:200px;
    border:aqua;
`
