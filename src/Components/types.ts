export interface TodoItem {
    id: string;

    desc: string;
    category: string;
    content: string;

    checked: boolean;
    done: boolean;
}


export interface TodoDto {
    _id: string;

    description: string;

    completed: string;
}