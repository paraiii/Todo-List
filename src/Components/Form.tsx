import React, { ChangeEvent, useState, useContext, useCallback } from 'react';
import styled from "styled-components";
import { TodoContext } from './Context/TodoContext';

export const Form = () => {
    const { addTodo} = useContext(TodoContext)
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')


    const handleChangeDesc = useCallback ((event: ChangeEvent<HTMLInputElement>) => {
        setInputDesc(event.target.value)
    }, [])
    const handleChangeCate= useCallback ((event: ChangeEvent<HTMLSelectElement>) => {
        setInputCate(event.target.value)
    }, [])
    const handleChangeCont = useCallback ((event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputCont(event.target.value)
    }, [])

    const onClick = useCallback ((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo({
            id: Date.now().toString(), //现在的时间戳
            desc: inputDesc,
            category: inputCate,
            content: inputCont
        })
    }, [])
   
    return (
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
                    <ButtonTh><button onClick={onClick}>Submit</button></ButtonTh>
                </tr>
            </thead>
        </table>
        
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


