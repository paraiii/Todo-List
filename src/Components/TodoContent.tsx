import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TodoContext } from "./Context/TodoContext";
import { TodoItem } from "./types"

interface TodoParams {
    id: string;
}

export const TodoContent = () => {
    const { id } = useParams<TodoParams> ();
    const { todoList } = useContext (TodoContext);
    const [todoContent, setTodoContent] = useState<TodoItem>();

    useEffect (() => {
        const todo = todoList.find((todo) => todo.id === id)
        setTodoContent(todo);
    }, [id, todoList])
        
        
    return (
        <div>
            {todoContent?.content}
        </div>
    )
}