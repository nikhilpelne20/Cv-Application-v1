import React from "react";
import Title from "../Utils/Title";

export default function EducationItem() {
  return (
    <div>
      <Title title="Education" />
      <div>
        <div className="flex gap-10">
          <div className="flex">
            <p>2013</p>
            <span>-</span>
            <p>2016</p>
          </div>
          <div>
          <p>XYZ University, <span>City</span></p>
            <p>- Degree: <span>Engineering</span> </p>
            <p>- Subject: <span>Science</span> </p>
            <p>- GPA: <span>3.4</span> </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-10">
          <div className="flex">
            <p>2013</p>
            <span>-</span>
            <p>2016</p>
          </div>
          <div>
          <p>XYZ University, <span>City</span></p>
            <p>- Degree: <span>Applied Physics</span> </p>
            <p>- Subject: <span>Aero dynamics</span> </p>
            <p>- GPA: <span>3.8</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
