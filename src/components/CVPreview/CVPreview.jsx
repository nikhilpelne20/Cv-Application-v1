import React from "react";
import HeaderPre from "./HeaderPre";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function CVPreview({cv}) {
  return (
    <div className="w-[210mm] h-[297mm] grid grid-cols-3 grid-rows-28mm-269mm content-start sticky top-2 shadow-lg">
      <HeaderPre personalInfo = {cv.personalInfo} />
      <Content experienceInfo ={cv.experience} educationInfo ={cv.education} />
      <Sidebar personalInfo = {cv.personalInfo} />
    </div>
  );
}
