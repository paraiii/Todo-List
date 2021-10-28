import { useContext } from "react";
import styled from "styled-components";
import {Form} from "./Form";
import {TodoContext} from './Context/TodoContext';
import { Link } from "react-router-dom";
import { InputTodo } from "./InputTodo";
import { TodoItem } from "./types";

export const TodoList = () => {

    // const {values, addTodo, removeTodo } = useContext(TodoContext);

    // return (
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>
    //                     {<input 
    //                         type="checkbox" 
    //                         onChange={(e) =>{}} />}
    //                 </th>
    //                 <th>Description</th>
    //                 <th>Category</th>
    //                 <th>Operate</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>
    //                     <input 
    //                         type="checkbox">
    //                     </input>
    //                 </td>
    //                 <td> 
    //                     {/* <div onClick = {() => todo.id}> 
    //                     {todo.category}</div> */}
    //                 </td>
    //                 <td>
    //                     <text onClick={removeTodo}>
    //                         Delete
    //                     </text>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // )
    const { todoList, removeTodo } = useContext(TodoContext);
    const { handleDelete } = useContext(TodoContext);

    return (
        <ListTable>
            <thead>
                <tr>
                    <HeaderItem>
                        <button onClick={handleDelete}>Delete Select</button>
                    </HeaderItem>
                    <HeaderItem>Description</HeaderItem>
                    
                    <HeaderItem>Category</HeaderItem>
                    {/* <HeaderItem>Content</HeaderItem> */}
                    <HeaderItem>Operate</HeaderItem>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todoItem: TodoItem) => {
                    return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
                })}
            </tbody>
        </ListTable>
    );
}

const ListTable = styled.div`
    padding: 10px;
`
const HeaderItem = styled.th`
    padding: 10px;
`
