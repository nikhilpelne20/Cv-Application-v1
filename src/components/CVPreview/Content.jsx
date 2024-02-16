import React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Title from "../Utils/Title";

export default function Content({experienceInfo}) {
  console.log(experienceInfo)
  return (
    <div className="p-4 bg-gray-100 col-span-2 h-[271mm]" >
      <div>
        <Title title="Description" />
        <p>
          {experienceInfo[0].position}
        </p>
      </div>
      <ExperienceItem />
      <EducationItem />
    </div>
  );
}
