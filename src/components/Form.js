import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from './Hooks/TodoContext';
import InputTodo from './InputTodo';

function Form(props) {
    // const [inputDesc, setInputDesc] = useState(['']); 
    // const [inputCate, setInputCate] = useState(['']); 
    // const [inputCont, setInputCont] = useState(['']); 

    // const handleChangeDesc = e => {
    //     setInputDesc(e.target.value);
    // }

    // const handleChangeCate= e => {
    //     setInputCate(e.target.value);
    // }
    // const handleChangeCont= e => {
    //     setInputCont(e.target.value);
    // }

    // const handleSubmit = e => {
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

    const value = useContext(TodoContext);

    return (
        <div className='todo-form'>
            <form className='todo-form'>
            {/* <form className='todo-form' onSubmit={handleSubmit}>
            <div className='todo-name'>
                <div className='item-height'>
                    <text>Description:</text>
                    <Link to="/contentPage" className="nav-link">todo</Link>
                </div>

                <div className='item-height'>
                    <text>Category:</text>
                </div>

                <div className='item-height'>
                    <text>Content:</text>
                </div>

            <div className='item-height'>
                <button className='Submit'>Submit</button>
            </div>
        </div> */}
            <InputTodo />
            {/* <div className='todo-name'>
                <div className='item-height'>
                    <input 
                        type='text'
                        name='text'
                        value={inputDesc}
                        className='todo-input'
                        onChange={handleChangeDesc}
                    />
                </div>

                <div className='item-height'>
                    <select
                        type='text'
                        value={inputCate}
                        name='category'
                        className='todo-input'
                        onChange={handleChangeCate}>
                        <option value=""></option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JS</option>
                    </select>
                </div>

                <div className='item-height'>
                    <textarea 
                        type='text'
                        name='content'
                        input={inputCont}
                        className='todo-input'
                        onChange={handleChangeCont}
                    />
                </div>
            </div> */}
        </form>
    </div>
    );
}

export default Form;
