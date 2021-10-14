import React from 'react';
import { useParams } from "react-router-dom";
import ContentData from './ContentData';

function ContentPage() {
    const {todoId} = useParams()
    const thisTodo = ContentData.find(todo=> todo.id === todoId)

    return (
        <div>
            <p>Description: {thisTodo.desc}</p>
            <p>Category: {thisTodo.category}</p>
            <p>Content: {thisTodo.content}</p>
        </div>
    );
}

export default ContentPage;
