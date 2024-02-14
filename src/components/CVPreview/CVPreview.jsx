import React from "react";
import HeaderPre from "./HeaderPre";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function CVPreview() {
  return (
    <div className="w-[210mm] h-[297mm] shadow-lg top-2 sticky">
      <HeaderPre />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <Content />
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
