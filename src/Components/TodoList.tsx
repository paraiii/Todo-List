import { useContext } from "react";
import styled from "styled-components";
import {Form} from "./Form";
import {TodoContext} from './Context/TodoContext';
import { Todo } from './Todo';

export const TodoList = () => {

    const value = useContext(TodoContext);

    return (
        <div>
           {/* {value.todoList.map(item => (
               <Todo 
                    todos={value.actions.add}         
                    removeTodo={value.actions.removeTodo}/>
           ))}  */}
            {/* {todoList.map((inputDesc: ItodoList, key: number) => {
                <InputTodo key={key} inputDesc={inputDesc} removeTodo={removeTodo} />;
            })} */}
        </div>
    )
}
// 34'36
const NavContainer = styled.div`
  
`