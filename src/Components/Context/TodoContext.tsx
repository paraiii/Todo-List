import { createContext, useCallback, useState } from "react";
import { TodoItem } from "../types";

interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
    handleCheck: (id: string, checked: boolean) => void;
    handleDelete: () => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
    handleCheck: (id: string, checked: boolean) => {},
    handleDelete: () => {},
}

export const TodoContext = createContext(initialValue);

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    const [todoList, setTodoList] = useState<TodoItem[]>([]);


    const addTodo = (todo: TodoItem): void => {
        setTodoList([...todoList, todo]);
    };

    const removeTodo = (id: string): void => {
        setTodoList (
            todoList.filter((item)=> {
                return item.id !== id;
            })
        );
    };
    const handleCheck = useCallback ((id:string, checked: boolean) => {
        const modifiedTodoList = todoList.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.checked = !todoItem.checked;
          }
          return todoItem;
        });
        setTodoList(modifiedTodoList);
    }, [todoList]);

    const handleDelete = useCallback (() => {
        const filteredTodoList = todoList.filter((todoItem) => todoItem.checked === false);
        debugger
        setTodoList(filteredTodoList);
    }, [todoList]);

    const values: TodoContextValue = {
        todoList: todoList,
        addTodo: addTodo,
        removeTodo: removeTodo,
        handleCheck: handleCheck,
        handleDelete: handleDelete,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
}

