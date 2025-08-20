'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Todo, TodoStatus} from '../../types';
import { fetchById } from '../../todoService';
import BasePage from "@/app/shared/components/BasePage";
import StatusBadge from "@/app/shared/components/StatusBadge";

export default function TodoDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchById(Number(id)).then((data) => {
        setTodo(data);
        setLoading(false);
      });
    }
  }, [id]);


  return (
      <BasePage isLoading={loading}>
        <div className="p-8 max-w-lg mx-auto">
          <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-700">Todo Details</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                {todo?.id}
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">{todo?.taskTitle}</div>
                 {todo && <StatusBadge status={todo.status} />}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-1">Start Time</span>
                <span className="font-mono text-base text-gray-700">{todo?.startTime}</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-1">End Time</span>
                <span className="font-mono text-base text-gray-700">{todo?.endTime}</span>
              </div>
            </div>
            <button className="self-end mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition" onClick={() => router.back()}>
              Back
            </button>
          </div>
        </div>
      </BasePage>
  );
}
