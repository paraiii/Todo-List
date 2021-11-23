import React, { ChangeEvent, useState, useContext, useCallback } from 'react';
import styled from "styled-components";
import { TodoContext } from './Context/TodoContext';

export const Form = () => {
    const { addTodo, loading } = useContext(TodoContext)
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')
    
    const handleChangeDesc = useCallback ((event: ChangeEvent<HTMLInputElement>): void => {
        setInputDesc(event.target.value)
    }, [])
    const handleChangeCate= useCallback ((event: ChangeEvent<HTMLSelectElement>): void => {
        setInputCate(event.target.value)
    }, [])
    const handleChangeCont = useCallback ((event: ChangeEvent<HTMLTextAreaElement>): void => {
        setInputCont(event.target.value)
    }, [])

    const addClick = (button: any) => {
        addTodo({
            id: Date.now().toString(), //现在的时间戳
            desc: inputDesc,
            category: inputCate,
            content: inputCont,
            checked: false,
            done: false,
        });   
    }

    return (
        <TableContainer>
            <table> 
            <TodoListTitle>
                <text>Start Add Todo's</text>
            </TodoListTitle>

                <Thead>
                    <FormTr>
                        <FormTh> Description: </FormTh>
                        <FormInput>
                            <th>
                                <input 
                                    type='text'
                                    name='text'
                                    value={inputDesc}
                                    className='todo-input'
                                    onChange={handleChangeDesc}
                                />
                            </th>
                        </FormInput>
                    </FormTr>
                    <FormTr>
                        <FormTh>Category:</FormTh>
                        <FormInput>
                            <th>
                                <select
                                    value={inputCate}
                                    name='category'
                                    onChange={handleChangeCate}
                                >
                                    <option value=""></option>
                                    <option value="CSS">CSS</option>
                                    <option value="JS">JS</option>
                                </select>
                            </th>
                        </FormInput>
                    </FormTr>
                    <FormTr>
                        <FormTh>Content:</FormTh>
                        <FormInput>
                            <textarea 
                                value={inputCont}
                                name='category'
                                onChange={handleChangeCont}
                            />
                        </FormInput>
                    </FormTr>
                    <tr>
                        <th></th>
                        <ButtonTh>
                                <AddButton 
                                    onClick= {addClick} 
                                    disabled={loading}
                                >
                                    Add
                                </AddButton>
                        </ButtonTh>
                    </tr>
                </Thead>
            </table>
        </TableContainer>
    );
}

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Thead = styled.thead`
    display: inline-flex;
    flex-direction: column;
`
const FormTr = styled.tr`
    text-align: left;
    padding: 10px;
`
const FormTh = styled.th`
    flex-direction: row;
    align-self: right;
`
const FormInput = styled.div`
    justify-content: flex-end;
`
const ButtonTh = styled.a`
    text-align: right;
    margin: 0 10px;
`
const AddButton = styled.button`
    background-color: orange;
    color: white;
    border-radius: 4px;
`
const TodoListTitle = styled.div`
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
`


