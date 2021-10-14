import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import TodoContext from './Hooks/TodoContext';


function InputTodo() {
    const value = useContext(TodoContext);
    // debugger
    const [inputDesc, setInputDesc] = useState([
]);

    const [inputCate, setInputCate] = useState([]); 

    const [inputCont, setInputCont] = useState(['']); 
    const [todo, setTodo] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
             <form className='todo-form' onSubmit={handleSubmit}>
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
                </div>
                <div className='todo-name'>
                    <div className='item-height'>
                        <input 
                            type='text'
                            name='text'
                            value={inputDesc}
                            className='todo-input'
                            onChange={(e) => setInputDesc(e.target.value)}
                        />
                    </div>

                    {/* <div className='item-height'>
                        <select
                            type='text'
                            value={inputCate}
                            name='category'
                            className='todo-input'
                            onChange={(e) => setInputCate(e.target.value)}>
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
                            onChange={(e) => setInputCont(e.target.value)}
                        />
                    </div> */}
                    <div
                        onClick={() => {
                            value.actions.add(todo);
                            setTodo("");
                        }}>
                            
                    </div> 
                </div>
            </form>
        </div>
    )
}

export default InputTodo;
