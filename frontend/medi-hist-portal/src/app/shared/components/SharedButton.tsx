import React from "react";

interface SharedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SharedButton: React.FC<SharedButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded shadow text-sm font-semibold transition-colors focus:outline-none ${className}`}
    {...props}>
    {children}
  </button>
);

export default SharedButton;

