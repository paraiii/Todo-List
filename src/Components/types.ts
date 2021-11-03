export interface TodoItem {
    id: string;

    desc: string;
    category: string;
    content: string;

    checked: any;
}


export interface TodoDto {
    _id: string;

    description: string;

    completed: boolean;
}