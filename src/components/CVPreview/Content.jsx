import React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Title from "../Utils/Title";

export default function Content({experienceInfo,educationInfo}) {
  return (
    <div className="p-4 bg-gray-100 col-span-2 h-[271mm]" >
      <div>
        <Title title="Description" />
        <p>
        </p>
      </div>
      <ExperienceItem experience={experienceInfo}/>
      <EducationItem education={educationInfo} />
    </div>
  );
}
