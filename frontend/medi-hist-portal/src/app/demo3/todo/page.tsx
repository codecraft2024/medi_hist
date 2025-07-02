"use client";
import React, {useState, useEffect} from "react";
import { Todo } from "./types";
import TodoModal from "./shared/TodoModal";
import AddButton from "./shared/AddButton";
import { getDummyTodos } from "./service";
import BasePage from "./shared/BasePage";
import TodoTable from "@/app/demo3/todo/shared/TodoTable";


function ToDoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await getDummyTodos();
            setTodos(data);
            setLoading(false);
        })();
    }, []);

    const handleAddTodo = (todo: Todo) => {
        setTodos(prev => [...prev, todo]);
    };

    return (
        <BasePage loading={loading}>
            <div className="max-w-8xl mx-auto p-12 relative">
                <h1 className="text-2xl font-bold mb-4 text-center">..... My Todo List .....</h1>
                <div className="flex justify-end mb-4">
                    <AddButton
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => setIsModalOpen(true)}>
                        New Task
                    </AddButton>
                </div>
                {<TodoTable todos={todos} />}
                <TodoModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAdd={handleAddTodo}
                    nextId={todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1}/>
            </div>
        </BasePage>
    );
}

export default ToDoPage;
