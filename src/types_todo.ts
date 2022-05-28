export interface Itodo {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
};

export type TodoProps = {
    todos: Itodo[]
    onCheckTodo(id: number): void
    onRemoveTodo(id: number): void
};

export type ResponsDataType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};
