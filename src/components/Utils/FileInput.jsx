import React from "react";

export default function FileInput({ name, label, placeholder }) {
  return (
    <label>
      <input className="border-2 border-gray-300 p-1 mb-1 rounded" type="file" name={name} placeholder={placeholder}></input>
    </label>
  );
}
