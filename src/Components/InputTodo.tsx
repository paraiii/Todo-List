import styled from "styled-components";
import { TodoItem } from "./types";


interface Props {
    todoItem: TodoItem;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ todoItem, removeTodo}: Props) => {
    return (
        <div>
          <div>
            <span>{todoItem.desc}</span>
            <span>{todoItem.category}</span>
            <span>{todoItem.content}</span>
          </div>
          <button
            onClick={() => {
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