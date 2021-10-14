import React, { Children, useState } from 'react';
import Delete from '../Delete';


function TodoContext (children) {

    const [inputDesc, setInputDesc] = useState([
        {Description: "1"},
        {Description: "2"}
    ]);
    const [inputCate, setInputCate] = useState([
    ]); 
    
    const [inputCont, setInputCont] = useState(['']); 

    const [todos, setTodos] = useState([]);

    
    const addTodo = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };
    const [todoList, SetTodoList] = useState([
        { desc: 1, category: "JS"},
        { desc: 2, category: "CSS"}
    ])
    const values = {
        id:Math.floor(Math.random() * 1000),  //给todolist的事随机分配一个0-1000的数做id
        desc: inputDesc,
        category: inputCate,
        content: inputCont,
        actions: {
            add: addTodo,
            remove: removeTodo
        }
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
