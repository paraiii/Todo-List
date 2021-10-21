import styled from "styled-components";
import {Form} from "./Form";
import { TodoList } from "./TodoList";

export const TodoPage = () => {
    return  (
        <div>
            <TodoPageContainer>
                <Form />
                <TodoList />
            </TodoPageContainer>
        </div>
    )
}

const TodoPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: Helvetica;
    padding: 10px;
`