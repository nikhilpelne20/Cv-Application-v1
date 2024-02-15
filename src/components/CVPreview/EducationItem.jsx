import React from "react";
import Title from "../Utils/Title";

export default function EducationItem() {
  return (
    <div>
      <Title title="Education" />
      <div>
        <div className="flex gap-10">
          <div className="flex">
            <p></p>
            <span>-</span>
            <p></p>
          </div>
          <div>
          <p> <span></span></p>
            <p>- Degree: <span></span> </p>
            <p>- Subject: <span></span> </p>
            <p>- GPA: <span></span> </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-10">
          <div className="flex">
            <p></p>
            <span>-</span>
            <p></p>
          </div>
          <div>
          <p><span></span></p>
            <p>- Degree: <span></span></p>
            <p>- Subject: <span></span></p>
            <p>- GPA: <span></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
