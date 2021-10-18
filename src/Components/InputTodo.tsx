import styled from "styled-components";
import { ItodoList } from "./Interfaces";


interface Props {
    inputDesc: ItodoList;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ inputDesc, removeTodo}: Props) => {
    return (
        <div>
          <div>
            <span>{inputDesc.todoName}</span>
            <span>{inputDesc.category}</span>
            <span>{inputDesc.content}</span>
          </div>
          <button
            onClick={() => {
              removeTodo(inputDesc.todoName);
            }}
          >
            X
          </button>
        </div>
    );
};


const NavContainer = styled.div`
  
`