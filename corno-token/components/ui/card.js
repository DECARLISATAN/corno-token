import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border p-4 shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
