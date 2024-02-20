import React from "react";

export default function Section({ title, children }) {
  return (
    <div>
      <p className="text-xl font-bold mb-2 mt-2">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
