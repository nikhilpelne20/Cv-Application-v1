import React from "react";
import HeaderPre from "./HeaderPre";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function CVPreview() {
  return (
    <div className="w-[210mm] h-full shadow-md top-2 sticky">
      <HeaderPre />
      <div className="flex h-[297mm]" >
      <Content />
      <Sidebar />
      </div>
      
    </div>
  );
}
