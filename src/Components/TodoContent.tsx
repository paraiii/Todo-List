import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TodoItem } from "./types"

interface TodoParams {
    id: string;
}

export const TodoContent = () => {
    const { id } = useParams<TodoParams> ();
    const [todoContent, setTodoContent] = useState<TodoItem>();

    // useEffect (
    //     function() {
    //         TodoContent(id).then(res => {
    //             setTodoContent(res.data);
    //         });
    //     }
    // );
        
        
    return (
        <div>
            {todoContent?.content}
        </div>
    )
}