import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Section from "../Utils/Section";

export default function CVForm() {
  return (
    <div>
      <Personal />
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
