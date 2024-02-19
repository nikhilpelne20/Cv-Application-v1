import React from "react";

export default function FileInput({ onChange, label, name }) {
  return (
<label className="border-2 border-gray-300 p-1 mb-1 rounded">
    <input type="file" onChange={onChange} name={name}></input>
    {label}
</label>
  );
}
