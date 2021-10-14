import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-table-6/react-table.css';


function Todo({todos, removeTodo}) {

    console.log(todos);
    const [checkArr, setCheckArr] = useState([]);
    const handleCheckbox = (e, id) => {
        const isCheck = e.target.checked;
        
        setCheckArr([ {id:id, isCheck:isCheck}, ...checkArr])
        }

    return todos.map((todo, index) => (
         <table>
            <thead>
                <tr>
                    <th>
                        {<input type="checkbox" key={todo.id} onChange={(e) =>
                        {handleCheckbox(e, todo.id)}} />}
                    </th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='todo-row'>
                        <input 
                            type="checkbox">
                        </input>
                    </td>
                    <td>
                        <div key={todo.id}>
                        <Link to ={`/todoMap/${todo.id}`}>{todo.desc}</Link>
                          </div>
                    </td>
                    <td> 
                        <div className='todo-row' onClick = {() => todo.id}> 
                        {todo.category}</div>
                    </td>
                    <td className='todo-row'>
                        <text onClick={() => removeTodo(todo.id)} className='delete-button'>
                            Delete
                        </text>
                    </td>
                </tr>
            </tbody>
        </table>
    ));
}

export default Todo;
