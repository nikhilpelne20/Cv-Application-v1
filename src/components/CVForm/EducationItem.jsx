import React from "react";
import Input from "../Utils/Input";

export default function EducationItem({
  id,
  universityName,
  city,
  degree,
  subject,
  from,
  to,
  onDelete,
  onChange,
}) {
  return (
    <div className="flex flex-col w-full">
      <Input
        onChange={(e)=>onChange(e,id)}
        type="text"
        name="universityName"
        placeholder="University name"
        value={universityName}
      />
      <Input onChange={(e)=>onChange(e,id)} type="text" name="city" placeholder="City" value={city} />
      <Input onChange={(e)=>onChange(e,id)} type="text" name="degree" placeholder="Degree" value={degree} />
      <Input onChange={(e)=>onChange(e,id)} type="text" name="subject" placeholder="Subject" value={subject} />
      <Input onChange={(e)=>onChange(e,id)} type="text" name="from" placeholder="From" value={from} />
      <Input onChange={(e)=>onChange(e,id)} type="text" name="to" placeholder="To" value={to} />
      <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  );
}
