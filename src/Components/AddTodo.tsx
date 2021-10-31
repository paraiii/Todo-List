import { useContext, useEffect, useState } from "react";
import { AddTask } from "./API/AddTask";
import styled from "styled-components";
import { TodoContext } from "./Context/TodoContext";



export const AddTodo = () => {
    const { addTodo } = useContext(TodoContext)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo({
            id: Date.now().toString(), //现在的时间戳
            desc: inputDesc,
            category: inputCate,
            content: inputCont,
            checked: false,
        });
    }
    const [inputDesc, setInputDesc] = useState<string>('')
    const [inputCate, setInputCate] = useState<string>('')
    const [inputCont, setInputCont] = useState<string>('')

    
    const [addData, setAddData] = useState<Node[]>([]);

    useEffect(() => {
        debugger
        AddTask().then(res => {
            setAddData(res.data);
        });
    }, []);
        
    return (
        <AddButton onClick={onClick}>Add</AddButton>
    )
};

const AddButton = styled.button`
    background-color: orange;
    color: white;
    border-radius: 4px;
`