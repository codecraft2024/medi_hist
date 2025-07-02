"use client";
import React, {useState} from "react";
import { getDummyTodos } from "./service";
import { Todo } from "./types";
import TodoTable from "./shared/TodoTable";
import TodoModal from "./shared/TodoModal";
import AddButton from "./shared/AddButton";


function ToDoPage() {
    const [todos, setTodos] = useState<Todo[]>(getDummyTodos());
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTodo = (todo: Todo) => {
        setTodos(prev => [...prev, todo]);
    };

    return (
        <div className="max-w-8xl mx-auto p-12">
            <h1 className="text-2xl font-bold mb-4 text-center">..... My Todo List .....</h1>
            <div className="flex justify-end mb-4">
                <AddButton
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => setIsModalOpen(true)}>
                    New Task
                </AddButton>
            </div>
            <TodoTable todos={todos} />
            <TodoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddTodo}
                nextId={todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1}/>
        </div>
    );
}

export default ToDoPage;
