import React from "react";

interface AddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded shadow text-sm font-semibold transition-colors focus:outline-none ${className}`}
    {...props}>
    <span className="text-lg font-bold">+</span>
    {children}
  </button>
);

export default AddButton;

