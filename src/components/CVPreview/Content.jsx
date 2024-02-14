import React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Title from "../Utils/Title";

export default function Content() {
  return (
    <div className="w-[650px] p-4" >
      <div>
        <Title title="Description" />
        <p>
          As an Advanced Systems Engineer, you'll be at the forefront of
          innovation, driving the development and implementation of cutting-edge
          technologies that revolutionize industries. You'll collaborate closely
          with cross-functional teams to design, test, and optimize complex
          systems that push the boundaries of what's possible
        </p>
      </div>
      <ExperienceItem />
      <EducationItem />
    </div>
  );
}
