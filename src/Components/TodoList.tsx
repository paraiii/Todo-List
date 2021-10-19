import { useContext } from "react";
import styled from "styled-components";
import {Form} from "./Form";
import {TodoContext} from './Context/TodoContext';
import { Todo } from './Todo';
import { Link } from "react-router-dom";

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
}
// 34'36
const NavContainer = styled.div`
  
`