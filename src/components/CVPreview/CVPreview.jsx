import React, { forwardRef } from "react";
import HeaderPre from "./HeaderPre";
import Content from "./Content";
import Sidebar from "./Sidebar";

function CVPreview({ cv }, ref) {
  return (
    <div
      ref={ref}
      className="w-[210mm] h-[297mm] grid grid-cols-3 grid-rows-28mm-269mm content-start sticky top-2 shadow-xl"
    >
      <HeaderPre personalInfo={cv.personalInfo} />
      <Content
        experienceInfo={cv.experience}
        educationInfo={cv.education}
        personalInfo={cv.personalInfo}
      />
      <Sidebar personalInfo={cv.personalInfo} />
    </div>
  );
}

export default forwardRef(CVPreview);
