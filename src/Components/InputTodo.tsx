import styled from "styled-components";
import { ItodoList } from "./types";


interface Props {
    inputDesc: ItodoList;
    removeTodo(TodoNameDelete: string): void;
}

export const InputTodo = ({ inputDesc, removeTodo}: Props) => {
    return (
        <div>
          <div>
            <span>{inputDesc.desc}</span>
            <span>{inputDesc.category}</span>
            <span>{inputDesc.content}</span>
          </div>
          <button
            onClick={() => {
              removeTodo(inputDesc.desc);
            }}
          >
            Delete
          </button>
        </div>
    );
};


const NavContainer = styled.div`
  
`