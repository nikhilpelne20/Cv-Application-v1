import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Section from "../Utils/Section";

export default function CVForm({
  cv,
  onPersonalChange,
  onAddExp,
  onExperienceChange,
  onDeleteExp,
  onAddEdu,
  onDeleteEdu,
  onEducationChange,
  onLoadExampleCV,
}) {
  console.log(cv.education);
  return (
    <div className="w-[210mm] flex flex-col shadow-lg rounded border p-4 bg-gray-100 gap-2 ">
      <Personal onChange={onPersonalChange} personalInfo={cv.personalInfo} />
      <Experience
        experience={cv.experience}
        onAdd={onAddExp}
        onChange={onExperienceChange}
        onDelete={onDeleteExp}
      />
      <Education 
        education={cv.education} 
        onAdd={onAddEdu} 
        onChange={onEducationChange}
        onDelete={onDeleteEdu} 
      />
      <Section>
        <button onClick={onAddExp} className="button-green">
          Generate PDF
        </button>
        <button onClick={onLoadExampleCV} className="button-blue">Load Example</button>
        <button>Reset</button>
      </Section>
    </div>
  );
}
