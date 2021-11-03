import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./Context/TodoContext";
import {Form} from "./Form";
import { TodoList } from "./TodoList";

export const TodoPage = () => {
    const {loading } = useContext(TodoContext)
    return  (
        <div>
            { loading && <div>"LOADING"</div>}
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