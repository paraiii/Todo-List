import { useContext } from 'react';
import { TodoContext } from './TodoContext';


export const useTodo = () => {

    const state = useContext(TodoContext)

    // return state.contents;
}