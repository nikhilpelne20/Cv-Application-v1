import React from "react";

export default function Section({ title,children }) {
  return (
    <div className="max-w-[900px] w-full m-auto border shadow-lg p-4 mt-10 rounded-md bg-gray-100">
      <p className="text-xl font-bold mb-2 mt-2">{title}</p>
      <div className="flex flex-col">{children}</div>
        
    </div>
  );
}
