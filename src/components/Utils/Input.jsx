import React from "react";

export default function Input({ onChange, name, type, placeholder ,value}) {
  return (
    <input
      className="border-2 border-gray-300 p-1 mb-1 rounded"
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}
