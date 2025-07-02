import React from "react";
import {TodoStatus} from "@/app/demo3/todo/types";



interface StatusBadgeProps {
    status:TodoStatus
 }

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
    return (
        <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${status === TodoStatus.Completed ? 'bg-green-100 text-green-700' : status === TodoStatus.Pending ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{status}</span>
    );
};

export default StatusBadge;
