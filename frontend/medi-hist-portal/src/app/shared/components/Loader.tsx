import React from "react";

const Loader: React.FC<{size?: number; className?: string}> = ({ size = 32, className = "" }) => (
  <span
    className={`inline-flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
    aria-label="Loading..."
  >
    <svg
      className="animate-spin"
      style={{ width: size, height: size }}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#e5e7eb"
        strokeWidth="6"
        fill="none"
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#3b82f6"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset="60"
      />
    </svg>
  </span>
);

export default Loader;
