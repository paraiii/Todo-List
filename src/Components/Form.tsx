import React, { ChangeEvent, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { TodoContext } from './Context/TodoContext';
import { InputTodo } from './InputTodo';
import { Todo } from './Todo';
import { TodoList } from './TodoList';
import { TodoItem } from './types';

export const Form = () => {
    const { addTodo, removeTodo } = useContext(TodoContext)
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')
    const [todoList, setTodoList] = useState<TodoItem[]>([]);


    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputDesc(event.target.value)
    };
    const handleChangeCate= (event: ChangeEvent<HTMLSelectElement>): void => {
        setInputCate(event.target.value)
    };
    const handleChangeCont = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setInputCont(event.target.value)
    };

    const onClick = () => {
        addTodo({
            id: Date.now().toString(), //现在的时间戳
            desc: inputDesc,
            category: inputCate,
            content: inputCont
        })
    }
    // const value = useContext(TodoContext)


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
                            value={inputDesc}
                            className='todo-input'
                            onChange={handleChangeDesc}
                        />
                </div>
                <div>
                    <text>Category:</text>
                    <select
                        value={inputCate}
                        name='category'
                        className='todo-input'
                        onChange={handleChangeCate}
                    >
                        <option value=""></option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JS</option>
                    </select>
                </div>
                <div>
                    <text>Content:</text>
                    <textarea 
                        value={inputCont}
                        name='category'
                        className='todo-input'
                        onChange={handleChangeCont}
                    />
                </div>
                <button onClick={onClick}>Submit</button>
                <div>
                    {todoList.map((todoItem: TodoItem) => {
                        return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
                    })}
                </div>
            </form>
        </div>
        
    );
}

const NavContainer = styled.div`
    
`