
export enum TodoStatus {
    Pending = "pending",
    Completed = "completed",
    InProgress = "in-progress"
}

export type Todo = {
    id: number;
    taskTitle: string;
    status: TodoStatus;
    startTime: string;
    endTime: string;
};

