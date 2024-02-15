import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Section from "../Utils/Section";

export default function CVForm({cv,onPersonalChange}) {
  return (
    <div className="w-[210mm] flex flex-col shadow-lg rounded border p-4 bg-gray-100 gap-2 ">
      <Personal onChange={onPersonalChange} personalInfo={cv.personalInfo}/>
      <Experience />
      <Education />
      <Section>
        <button className="button-green">Generate PDF</button>
        <button className="button-blue">Load Example</button>
        <button>Reset</button>
      </Section>
    </div>
  );
}
