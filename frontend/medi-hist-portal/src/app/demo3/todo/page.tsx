"use client";
import React, {useState, useEffect} from "react";
import { Todo } from "./types";
import AddModal from "@/app/demo3/todo/components/TodoModal";
import AddButton from "@/app/demo3/shared/AddButton";
import { fetchAll, add, deleteItem, update } from "./todoService";
import BasePage from "@/app/demo3/shared/BasePage";
import TodoTable from "@/app/demo3/todo/components/TodoTable";
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";


function ToDoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState<number | null>(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedUpdateTodo, setSelectedUpdateTodo] = useState<Todo | null>(null);

    useEffect(() => {
        (async () => {
            const data = await fetchAll();
            setTodos(data);
            setLoading(false);
        })();
    }, []);

    const handleRequestDelete = (id: number) => {
        setSelectedDeleteId(id);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (selectedDeleteId !== null) {
            setTodos(prev => deleteItem(prev, selectedDeleteId));
        }
        setShowDeleteModal(false);
        setSelectedDeleteId(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setSelectedDeleteId(null);
    };

    const handleRequestUpdate = (todo: Todo) => {
        setSelectedUpdateTodo(todo);
        setShowUpdateModal(true);
    };

    const handleConfirmUpdate = (updated: Todo) => {
        setTodos(prev => update(prev, updated));
        setShowUpdateModal(false);
        setSelectedUpdateTodo(null);
    };

    const handleCancelUpdate = () => {
        setShowUpdateModal(false);
        setSelectedUpdateTodo(null);
    };

    return (
        <BasePage isLoading={loading}>
            <div className="max-w-8xl mx-auto p-12 relative">
                <h1 className="text-2xl font-bold mb-4 text-center">..... My Todo List .....</h1>
                <div className="flex justify-end mb-4">
                    <AddButton
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => setIsModalOpen(true)}>
                        New Task
                    </AddButton>
                </div>
                {<TodoTable todos={todos} onDelete={(id) => setTodos(prev => deleteItem(prev, id))} onRequestDelete={handleRequestDelete} onRequestUpdate={handleRequestUpdate} />}
                <AddModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAdd={(todo) => setTodos(prev => add(prev, todo))}
                    nextId={todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1}/>
                <DeleteModal
                    show={showDeleteModal}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}/>
                <UpdateModal
                    show={showUpdateModal}
                    todo={selectedUpdateTodo}
                    onCancel={handleCancelUpdate}
                    onConfirm={handleConfirmUpdate}/>
            </div>
        </BasePage>
    );
}

export default ToDoPage;

