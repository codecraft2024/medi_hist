import React, { useState } from "react";
import { Todo, TodoStatus } from "../types";

interface UpdateModalProps {
  show: boolean;
  todo: Todo | null;
  onCancel: () => void;
  onConfirm: (updated: Todo) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ show, todo, onCancel, onConfirm }) => {
  const [form, setForm] = useState<Todo | null>(todo);

  React.useEffect(() => {
    setForm(todo);
  }, [todo]);

  if (!show || !form) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-30">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Update Task</h2>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            className="w-full border px-2 py-1 rounded"
            value={form.taskTitle}
            onChange={e => setForm({ ...form, taskTitle: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Status</label>
          <select
            className="w-full border px-2 py-1 rounded"
            value={form.status}
            onChange={e => setForm({ ...form, status: e.target.value as TodoStatus })}
          >
            <option value={TodoStatus.Pending}>Pending</option>
            <option value={TodoStatus.Completed}>Completed</option>
            <option value={TodoStatus.InProgress}>In Progress</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Start Time</label>
          <input
            type="datetime-local"
            className="w-full border px-2 py-1 rounded"
            value={form.startTime}
            onChange={e => setForm({ ...form, startTime: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">End Time</label>
          <input
            type="datetime-local"
            className="w-full border px-2 py-1 rounded"
            value={form.endTime}
            onChange={e => setForm({ ...form, endTime: e.target.value })}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={() => form && onConfirm(form)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;

