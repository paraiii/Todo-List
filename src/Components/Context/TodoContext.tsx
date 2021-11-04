import { createContext, useCallback, useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { AddTask } from "../API/AddTask";
import { DeleteTask } from "../API/DeleteTask";
import { GetAllTasks } from "../API/GetAllTasks";
import { TodoDto, TodoItem } from "../types";

interface TodoContextProp {
    children: any;
    value: TodoContextValue;
}

export interface TodoContextValue {
    todoList: TodoItem[];
    loading: boolean;
    addTodo: (todo: TodoItem) => void;
    removeTodo: (id: string) => void;
    handleCheck: (id: string, checked: boolean) => void;
    handleDelete: () => void;
}
export const initialValue: TodoContextValue = {
    todoList: [],
    loading: false,
    addTodo: (todo:TodoItem)=>{},
    removeTodo: (id: string) => {},
    handleCheck: (id: string, checked: boolean) => {},
    handleDelete: () => {},
}

export const TodoContext = createContext(initialValue);
// const KEY = "paraiii-todo-list";

export const TodoContextProvider = (props: TodoContextProp) => {
    const {children} = props;    
    // const storage = window.localStorage;
    // const storedList = storage.getItem(KEY) || "[]"
    // const [todoList, setTodoList] = useState<TodoItem[]>(JSON.parse(storedList));
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);      

    useEffect (() => {
        setLoading(true);
    //     storage.setItem(KEY, JSON.stringify(todoList));
    // }, [todoList])
        //每当todolist改变时，把东西存到storage里
        // AddTask().then(res => {
        //     //  setTodoList(res.data)
        //      addTodo(res.data.data) //data里有count和data两部分，不是一个obj
        // })
        GetAllTasks().then(res => {
            setLoading(false);
            const todoDtos = res.data.data;
            const todoItems = todoDtos.map((todoDto: TodoDto) => {
                const content: Partial<TodoItem> = JSON.parse(todoDto.description)
                return { ...content,id: todoDto._id}
            })
            setTodoList(todoItems)
       })
    // }, [todoList]); //不能有这个dependency
    }, []);

    const addTodo = (todo: TodoItem): void => {
        const todoDto: Partial<TodoDto> = {
            "description": JSON.stringify(todo)
        }; 
        setLoading(true);
        AddTask(todoDto).then(res => { //点击button之后拿到response
            setLoading(false);
            todo.id = res.data.data._id
            setTodoList([...todoList, todo]);
        });
    };  
    
    const removeTodo = (id: string): void => {
        DeleteTask(id).then(res => {
            setTodoList (
                todoList.filter((item)=> {
                    return item.id !== id;
                })
            );
        })
    };

    // const removeTodos = (ids: string): void => {
    //     Promise.all(
    //         ids.map(id => DeleteTask(id))
    //     ).then ((values) =>{
    //         console.log(values);
    //     }
            
    //     )
    // }
    
    const handleCheck = useCallback ((id:string, checked: boolean) => {
        const modifiedTodoList = todoList.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.checked = !todoItem.checked;
          }
          return todoItem;
        });
        setTodoList(modifiedTodoList);
    }, [todoList]);

    const [checked, setChecked] = useState();
    const todoCompleted = () => {
        const onChangeCheck = (event: any) => {
            setChecked(event.target.checked);
        }
        return (
            <input
            checked={checked}
            onChange={onChangeCheck}
          />)

    }

    const handleDelete = useCallback (() => {
        const filteredTodoList = todoList.filter((todoItem) => todoItem.checked === false);
        debugger
        setTodoList(filteredTodoList);
    }, [todoList]);

    const values: TodoContextValue = {
        todoList: todoList,
        loading: loading,
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

