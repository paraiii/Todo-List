import { useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {TodoContext} from './Context/TodoContext';
import { TodoItem } from "./types";
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Form } from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
  
export const TodoList = () => {
    const classes = useStyles();
    const { todoList, removeTodo, authenticated, todoCompleted } = useContext(TodoContext);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <ModalForm>
        <Form />
      </ModalForm>
    );

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
                                    onChange={() => todoCompleted(todoItem.id, todoItem.done)}
                                    type="checkbox"
                                    checked={todoItem.done}
                                />
                            </TableCell>
                            <TableCell align="center" >
                                <a href= {`/todo/${todoItem.id}`}>{todoItem.desc}</a>
                            </TableCell>
                            <TableCell align="center">{todoItem.category}</TableCell>
                            <TableCell align="center">
                                <button onClick={() => {
                                    removeTodo(todoItem.id);}}>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AddButton>
                <ButtonContainer onClick={handleOpen}>Add more todos</ButtonContainer>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        {body}
                    </Modal>
            </AddButton>
            </TableContainer>
    );
}

const TableTitle = styled.div`
    text-align: center;
    front-size: 28px;
    font-weight: bold;
    padding: 10px;
`
const AddButton = styled.div`
    margin: 10px;
    text-align: center;
    padding: 10px;
`
const ButtonContainer = styled.button`
    text-decoration: none;
    color: black;
    padding: 5px;
`
const ModalForm = styled.div`
    margin: auto;
    margin-top: 10%;
    width: 40%;
    border: 3px solid grey;
    padding: 20px;
    justify-content: center;
    background-color: white;
    display: flex;

`

