import React, { ChangeEvent, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { InputTodo } from './InputTodo';
import { ItodoList } from './Interfaces';
import { Todo } from './Todo';
import { TodoList } from './TodoList';

export const Form = () => {

const [inputDesc, setInputDesc] = useState<string>('')
const [inputCate, setInputCate] = useState<string>('')
const [inputCont, setInputCont] = useState<string>('')
const [todoList, setTodoList] = useState<ItodoList[]>([]);


const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>) => {
    setInputDesc(event.target.value)
};
const handleChangeCate= (event: ChangeEvent<HTMLInputElement>) => {
    setInputCate(event.target.value)
};
const handleChangeCont = (event: ChangeEvent<HTMLInputElement>) => {
    setInputCont(event.target.value)
};

const addTodo = (): void => {
    const newTodo = { todoName: inputDesc, category: inputCate, content: inputCont};
    setTodoList([...todoList, newTodo]);
    setInputDesc("");
    setInputCate("");
    setInputCont("");
};

const removeTodo = (TodoNameDelete: string): void => {
    setTodoList (
        todoList.filter((inputDesc)=> {
            return inputDesc.todoName != TodoNameDelete;
        })
    );
};

// const handleSubmit = event => {
//     e.preventDefault();

//     props.onSubmit({
//         id:Math.floor(Math.random() * 1000),  //给todolist的事随机分配一个0-1000的数做id
//         desc: inputDesc,
//         category: inputCate,
//         content: inputCont
//     });
//     setInputDesc('');
//     setInputCate('');
//     setInputCont('');
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
                    // type='text'
                    value={inputCate}
                    name='category'
                    className='todo-input'
                    // onChange={handleChangeCate}
                >
                    <option value=""></option>
                    <option value="CSS">CSS</option>
                    <option value="JS">JS</option>
                </select>
            </div>
            <div>
                <text>Content:</text>
                <textarea 
                    // type='text'
                    value={inputCont}
                    name='category'
                    className='todo-input'
                    // onChange={handleChangeCont}
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