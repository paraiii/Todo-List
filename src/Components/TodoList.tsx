import { useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {TodoContext} from './Context/TodoContext';
import { InputTodo } from "./InputTodo";
import { TodoItem } from "./types";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

});
  
  
export const TodoList = () => {
    const classes = useStyles();
    const { todoList, removeTodo, authenticated, handleCheck } = useContext(TodoContext);
    const { handleDelete } = useContext(TodoContext);

    if (!authenticated) {
        return <Redirect to= "/login" />
    }


    return (
            <TableContainer component={Paper}>
                <TableTitle >
                    Your todo list
                </TableTitle>
            <Table className={classes.table} aria-label="simple table">
                <TableHead> 
                    <TableRow>
                        <TableCell align="center">Completed </TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Operate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {todoList.map((todoItem: TodoItem) => (
                        <TableRow key={todoItem.id}>
                            <TableCell align="center">
                                <input
                                    onChange={() => handleCheck(todoItem.id, todoItem.checked)}
                                    type="checkbox"
                                    checked={todoItem.checked}
                                />
                            </TableCell>
                            <TableCell align="center" >
                                <a href= {`/todo/${todoItem.id}`}>{todoItem.desc}</a>
                            </TableCell>
                            <TableCell align="center">{todoItem.category}</TableCell>
                            <TableCell align="center">
                                <button onClick={() => {
                                    removeTodo(todoItem.id);}}>Delete</button></TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
            <AddButton>
                <ButtonText href="./Form">Add more todos</ButtonText>
            </AddButton>
            </TableContainer>
            
    );
    
}
  

// export const TodoList = () => {
//     const { todoList, removeTodo, authenticated } = useContext(TodoContext);
//     const { handleDelete } = useContext(TodoContext);

//     if (!authenticated) {
//         return <Redirect to= "/login" />
//     }

//     return (
//         <ListTable>
//             <thead>
//                 <tr>
//                     <HeaderItem>
//                         <button onClick={handleDelete}>Delete Select</button>
//                     </HeaderItem>
//                     <HeaderItem>Description</HeaderItem>
//                     <HeaderItem>Category</HeaderItem>
//                     <HeaderItem>Operate</HeaderItem>
//                 </tr>
//             </thead>
//             <StyledBody>
//                 {todoList.map((todoItem: TodoItem) => {
//                     return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
//                 })}
//             </StyledBody>
//         </ListTable>
//     );
// }

const ListTable = styled.div`
    padding: 10px;
`
const HeaderItem = styled.th`
    padding: 10px;
`
const StyledBody = styled.tbody`
    cursor: pointer;
`
const TableTitle = styled.div`
    text-align: center;
    front-size: 28px;
    font-weight: bold;
    padding: 10px;
`
const AddButton = styled.button`
    display: flex;
    align-items: right;
    justify-content: right;
    align-self: right;
        flex-direction: column;
  
    margin: 10px;
`
const ButtonText = styled.a`
    text-decoration: none;
    color: black;

`

