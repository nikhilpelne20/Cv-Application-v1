import React from "react";
import Title from "../Utils/Title";

export default function EducationItem({education}) {
  const educationItems = education.map((edu)=>{
    return(
        <div key={edu.id}>
        <div className="flex gap-10">
          <div className="flex">
            <p className="w-[35px]">{edu.from}</p>
            <span>-</span>
            <p className="w-[40px]">{edu.to}</p>
          </div>
          <div>
          <p className="font-bold" >{edu.universityName}, <span className="font-normal italic">{edu.city}</span></p>
            <p>- Degree: <span>{edu.degree}</span> </p>
            <p>- Subject: <span>{edu.subject}</span> </p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Title title="Education" />
      {educationItems}
    </div>
  );
}
