import { Todo, TodoStatus } from "./types";

export function getDummyTodos(): Todo[] {
    return [
        { id: 1, taskTitle: "Buy groceries", status: TodoStatus.Pending, startTime: "2023-10-01T10:00:00", endTime: "2023-10-01T11:00:00" },
        { id: 2, taskTitle: "Walk the dog", status: TodoStatus.Completed, startTime: "2023-10-02T09:00:00", endTime: "2023-10-02T09:30:00" },
        { id: 3, taskTitle: "Read a book", status: TodoStatus.Pending, startTime: "2023-10-03T14:00:00", endTime: "2023-10-03T15:00:00" },
    ];
}

