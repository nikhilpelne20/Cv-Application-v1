import React from "react";
import Title from "../Utils/Title";

export default function ExperienceItem() {
  return (
    <div>
      <Title title="Experience" />
      <div className="flex gap-10">
        <div className="flex">
          <p></p>
          <span>-</span>
          <p></p>
        </div>
        <div>
          <p><span className="font-bold" ></span> </p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}
