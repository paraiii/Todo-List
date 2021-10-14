import React, {useState, useContext} from 'react';
import Todo from './Todo';
import Form from './Form';
import Delete from './Delete';
import TodoContext from './Hooks/TodoContext';
import InputTodo from './InputTodo';


function List() {
    const value = useContext(TodoContext);

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    // const removeTodo = id => {
    //     const removeArr = [...todos].filter(todo => todo.id !== id);
    //     setTodos(removeArr);
    // };

    return (
        <div>
            {/* <InputTodo onSubmit={value.addTodo} /> */}
            <Form onSubmit={addTodo} /> 
            <Delete />  
            <div  className='todo-column'>
            <Todo todos={todos} removeTodo={value.remove}/>
            </div>
        </div> 
    );
}

export default List;
