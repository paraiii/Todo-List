import React, { ChangeEvent, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { TodoContext } from './Context/TodoContext';
import { InputTodo } from './InputTodo';
import { Todo } from './Todo';
import { TodoList } from './TodoList';
import { ItodoList } from './types';

export const Form = () => {

    // const [inputDesc, setInputDesc] = useState<string>('')
    // const [inputCate, setInputCate] = useState<string>('')
    // const [inputCont, setInputCont] = useState<string>('')
    // const [todoList, setTodoList] = useState<ItodoList[]>([]);


    // const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
    //     setInputDesc(event.target.value)
    // };
    // const handleChangeCate= (event: ChangeEvent<HTMLInputElement>): void => {
    //     setInputCate(event.target.value)
    // };
    // const handleChangeCont = (event: ChangeEvent<HTMLInputElement>): void => {
    //     setInputCont(event.target.value)
    // };
const {values, addTodo, removeTodo } = useContext(TodoContext)

    // const addTodo = (): void => {

    //     const newTodo = { desc: inputDesc, category: inputCate, content: inputCont};
    //     setTodoList([...todoList, newTodo]);
    //     setInputDesc("");
    //     setInputCate("");
    //     setInputCont("");
    // };

    // const removeTodo = (descDelete: string): void => {
    //     setTodoList (
    //         todoList.filter((inputDesc)=> {
    //             return inputDesc.desc != descDelete;
    //         })
    //     );
    // };


return (
    <div>
        <form> 
            <div>
                <text> Description: </text>
                    <input 
                        type='text'
                        name='text'
                        value={values.inputDesc}
                        className='todo-input'
                        onChange={values.handleChangeDesc}
                    />
            </div>
            <div>
                <text>Category:</text>
                <select
                    value={values.inputCate}
                    name='category'
                    className='todo-input'
                    onChange={values.handleChangeCate}
                >
                    <option value=""></option>
                    <option value="CSS">CSS</option>
                    <option value="JS">JS</option>
                </select>
            </div>
            <div>
                <text>Content:</text>
                <textarea 
                    value={values.inputCont}
                    name='category'
                    className='todo-input'
                    onChange={values.handleChangeCont}
                />
            </div>
            <button onClick={addTodo}>Submit</button>
            <div>
                {todoList.map((inputDesc: ItodoList, key: number) => {
                    return <InputTodo key={key} inputDesc={inputDesc} removeTodo={removeTodo} />;
                })}
            </div>
        </form>
    </div>
    
);
}

const NavContainer = styled.div`
    
`