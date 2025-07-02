import React from "react";
import { Todo, TodoStatus } from "../types";
import { useRouter } from 'next/navigation';

interface TodoTableProps {
  todos: Todo[];
}

const TodoTable: React.FC<TodoTableProps> = ({ todos }) => {
  const router = useRouter();

  const handleDetailsClick = (id: number) => {
    router.push(`/demo3/todo/details/${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Task</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Start Time</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">End Time</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {todos.map((todo) => (
            <tr key={todo.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 whitespace-nowrap">{todo.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{todo.taskTitle}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${todo.status === TodoStatus.Completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{todo.status}</span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{todo.startTime}</td>
              <td className="px-4 py-2 whitespace-nowrap">{todo.endTime}</td>
              <td className="px-4 py-2 whitespace-nowrap flex gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                  onClick={() => handleDetailsClick(todo.id)}
                >
                  Details
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs">Update</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
