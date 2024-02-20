import React from "react";

export default function Title({ title }) {
  return (
    <div className="pb-2">
      <h1 className="text-lg font-bold text-blue-900">{title}</h1>
      <div className="border-b border-blue-900"></div>
    </div>
  );
}
