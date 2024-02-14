import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Section from "../Utils/Section";

export default function CVForm() {
  return (
    <div>
      <Personal />
      <Experience/>
      <Education/>
     
    </div>
  );
}
