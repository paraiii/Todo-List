import styled from "styled-components";
import {Form} from "./Form";
import { TodoList } from "./TodoList";

export const TodoPage = () => {
    return  (
        <div>
            <NavContainer>
                <Form />
                <TodoList />
            </NavContainer>
        </div>
    )
}

const NavContainer = styled.div`
  
`