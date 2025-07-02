import React, {useState} from "react";
import {Todo, TodoStatus} from "../types";

interface TodoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (todo: Todo) => void;
    nextId: number;
}

const TodoModal: React.FC<TodoModalProps> = ({isOpen, onClose, onAdd, nextId}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [status, setStatus] = useState<TodoStatus>(TodoStatus.Pending);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!taskTitle || !startTime || !endTime) return;
        onAdd({id: nextId, taskTitle, status, startTime, endTime});
        setTaskTitle("");
        setStatus(TodoStatus.Pending);
        setStartTime("");
        setEndTime("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50"> {/* Modal overlay */}
            <div className="bg-white rounded-lg shadow-lg p-8 min-w-[350px]"> {/* Modal content */}
                <h2 className="text-xl font-bold mb-4">Add New Task</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Task Title</label>
                        <input
                            className="w-full border rounded px-3 py-2"
                            value={taskTitle}
                            onChange={e => setTaskTitle(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={status}
                            onChange={e => setStatus(e.target.value as TodoStatus)}>
                            <option value={TodoStatus.Pending}>Pending</option>
                            <option value={TodoStatus.Completed}>Completed</option>
                            <option value={TodoStatus.InProgress}>In Progress</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Start Time</label>
                        <input
                            type="datetime-local"
                            className="w-full border rounded px-3 py-2"
                            value={startTime}
                            onChange={e => setStartTime(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">End Time</label>
                        <input
                            type="datetime-local"
                            className="w-full border rounded px-3 py-2"
                            value={endTime}
                            onChange={e => setEndTime(e.target.value)}
                            required/>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                            onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoModal;
