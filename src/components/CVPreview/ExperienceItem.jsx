import React from "react";
import Title from "../Utils/Title";

export default function ExperienceItem({ experience }) {
  const experienceItems = experience.map((exp) => {
    return (
      <div className="flex gap-10" key={exp.id}>
        <div className="flex">
          <p>{exp.from}</p>
          <span>-</span>
          <p>{exp.to}</p>
        </div>
        <div>
          <p>
            {exp.position} <span className="font-bold">{exp.company}</span>
          </p>
          <p>{exp.workExperience},{exp.city}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Title title="Experience" />
      {experienceItems}
    </div>
  );
}
