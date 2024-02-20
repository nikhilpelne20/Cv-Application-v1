import React from "react";
import Input from "../Utils/Input";
export default function ExperienceItem({
  id,
  position,
  company,
  workExperience,
  city,
  from,
  to,
  onChange,
  onDelete,
}) {
  return (
    <div className="flex flex-col w-full">
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position"
        value={position}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company"
        value={company}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="workExperience"
        placeholder="Work Experience"
        value={workExperience}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={to}
      />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
