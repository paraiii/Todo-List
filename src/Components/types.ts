export interface TodoItem {
    id: string;
    desc: InputDescription;
    category: InputCategory;
    content: InputContent;
    addTodo: string;
    removeTodo: string;
}

export interface InputDescription {
}

export interface InputCategory {
}

export interface InputContent {
    content: string;
}

export interface ItodoList {
    desc: string;
    category: any;
    content: string;
}
