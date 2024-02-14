import React from "react";
import Title from "../Utils/Title";

export default function ExperienceItem() {
  return (
    <div>
      <Title title="Experience" />
      <div className="flex gap-10">
        <div className="flex">
          <p>2013</p>
          <span>-</span>
          <p>2016</p>
        </div>
        <div>
          <p>SDE <span className="font-bold" >XYZ InfoTech</span> </p>
          <p>
            As an Advanced Systems Engineer, you'll be at the forefront of
            innovation, driving the development and implementation of
            cutting-edge technologies that revolutionize industries. You'll
            collaborate closely with cross-functional teams to design, test, and
            optimize complex systems that push the boundaries of what's possible
            systems that push the boundaries of what's possible ,{" "}
            <span>Check republic</span>
          </p>
        </div>
      </div>
    </div>
  );
}
