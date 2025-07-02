import React from "react";

const Loader: React.FC<{size?: number; className?: string}> = ({ size = 24, className = "" }) => (
  <span className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <svg
      className="animate-spin text-blue-500"
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  </span>
);

export default Loader;

