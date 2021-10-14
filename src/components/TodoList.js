import React, {useContext} from 'react';
import Todo from './Todo';
import TodoContext from './Hooks/TodoContext';

function TodoList() {

    const value = useContext(TodoContext);

    return (
        <div>
           {value.todoList.map(item => (
               <Todo 
                    todos={value.actions.add}         
                    removeTodo={value.actions.removeTodo}/>
           ))} 
        </div>
    )
}

export default TodoList;
