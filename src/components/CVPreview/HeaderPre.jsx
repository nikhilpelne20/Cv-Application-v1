import React from "react";

export default function HeaderPre({ personalInfo }) {
  return (
    <div className="p-3 bg-blue-900 text-white col-span-3 h-[28mm]">
      <h1 className="text-5xl font-semibold">
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <p className="text-xl">{personalInfo.title}</p>
    </div>
  );
}
