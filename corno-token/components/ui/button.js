import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition ${className}`}
    >
      {children}
    </button>
  );
}
