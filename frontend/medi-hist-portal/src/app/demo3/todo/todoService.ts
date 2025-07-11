import { Todo, TodoStatus } from "./types";

export async function fetchAll(): Promise<Todo[]> {
    await new Promise(res => setTimeout(res, 500));
    return [
        { id: 1, taskTitle: "Buy groceries", status: TodoStatus.Pending, startTime: "2023-10-01T10:00:00", endTime: "2023-10-01T11:00:00" },
        { id: 2, taskTitle: "Walk the dog", status: TodoStatus.Completed, startTime: "2023-10-02T09:00:00", endTime: "2023-10-02T09:30:00" },
        { id: 3, taskTitle: "Read a book", status: TodoStatus.Pending, startTime: "2023-10-03T14:00:00", endTime: "2023-10-03T15:00:00" },
    ];
}

export async function fetchById(id: number): Promise<Todo | null> {
    await new Promise(res => setTimeout(res, 500));
    return {
        id,
        taskTitle: `Dummy Task ${id}`,
        status: TodoStatus.Pending,
        startTime: "2023-10-01T10:00:00",
        endTime: "2023-10-01T11:00:00"
    };
}

export function add(todos: Todo[], todo: Todo): Todo[] {
    return [...todos, todo];
}

export function deleteItem(todos: Todo[], id: number): Todo[] {
    return todos.filter(todo => todo.id !== id);
}

export function update(todos: Todo[], updated: Todo): Todo[] {
    return todos.map(todo => todo.id === updated.id ? updated : todo);
}
