import React, { ChangeEvent, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { TodoContext } from './Context/TodoContext';
import { InputTodo } from './InputTodo';
import { TodoList } from './TodoList';
import { TodoItem } from './types';

export const Form = () => {
    const { todoList, addTodo, removeTodo } = useContext(TodoContext)
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')
    // const [todoList, setTodoList] = useState<TodoItem[]>([]);

    const { handleDelete } = useContext(TodoContext);

    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputDesc(event.target.value)
    };
    const handleChangeCate= (event: ChangeEvent<HTMLSelectElement>): void => {
        setInputCate(event.target.value)
    };
    const handleChangeCont = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setInputCont(event.target.value)
    };

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo({
            id: Date.now().toString(), //现在的时间戳
            desc: inputDesc,
            category: inputCate,
            content: inputCont,
            checked: false,
        });
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
            <TodoListTitle>
                <h1>Start Add Todo's</h1>
            </TodoListTitle>
            <table> 
                <thead>
                    <FormTr>
                        <FormTh> Description: </FormTh>
                        <FormTh>
                            <input 
                                type='text'
                                name='text'
                                value={inputDesc}
                                className='todo-input'
                                onChange={handleChangeDesc}
                            />
                        </FormTh>
                    </FormTr>
                    <FormTr>
                        <FormTh>Category:</FormTh>
                        <FormTh>
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
                        </FormTh>
                    </FormTr>
                    <FormTr>
                        <FormTh>Content:</FormTh>
                        <FormTh>
                            <textarea 
                                value={inputCont}
                                name='category'
                                className='todo-input'
                                onChange={handleChangeCont}
                            />
                        </FormTh>
                    </FormTr>
                    <tr>
                        <th></th>
                        <ButtonTh>
                            <AddButton onClick={onClick}>Add</AddButton>
                        </ButtonTh>
                    </tr>
                    {/* <TodoListContainer>
                        <button onClick={handleDelete}>Delete Select</button>
                        {todoList.map((todoItem: TodoItem) => {
                            return <InputTodo key={todoItem.id} todoItem={todoItem} removeTodo={removeTodo} />;
                        })}
                    </TodoListContainer> */}
                </thead>
            </table>
        </div>
    );
}

const FormTr = styled.tr`
    text-align: left;
`
const FormTh = styled.th`
    padding: 10px;
`
const ButtonTh = styled.th`
    text-align: right;
`
const AddButton = styled.button`
    background-color: orange;
    color: white;
    border-radius: 4px;
`
const TodoListTitle = styled.div`
    text-align: center;
    
`


