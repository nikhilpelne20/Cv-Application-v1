import React from "react";
import HeaderPre from "./HeaderPre";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function CVPreview() {
  return (
    <div className="w-[210mm] h-[297mm] grid grid-cols-3 grid-rows-28mm-269mm content-start sticky top-2 shadow-lg">
      <HeaderPre />
      <Content />
      <Sidebar />
    </div>
  );
}
