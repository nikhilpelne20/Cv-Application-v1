import React from "react";
import Title from "../Utils/Title";

export default function EducationItem({education}) {
  const educationItems = education.map((edu)=>{
    return(
        <div key={edu.id}>
        <div className="flex gap-10">
          <div className="flex">
            <p>{edu.from}</p>
            <span>-</span>
            <p>{edu.to}</p>
          </div>
          <div>
          <p>{edu.universityName}, <span>{edu.city}</span></p>
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
