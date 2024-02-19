import React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Title from "../Utils/Title";

export default function Content({experienceInfo,educationInfo,personalInfo}) {
  return (
    <div className="p-4 bg-gray-100 col-span-2 h-[269mm]" >
      <div>
        <Title title="Description" />
        <p>
        {personalInfo.description}
        </p>
      </div>
      <ExperienceItem experience={experienceInfo}/>
      <EducationItem education={educationInfo} />
    </div>
  );
}
