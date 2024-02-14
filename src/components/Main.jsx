import React from "react";
import CVForm from "./CVForm/CVForm";
import Header from "./Header";
import CVPreview from "./CVPreview/CVPreview";

export default function Main() {
  return (
    <div>
      <Header/>
      <div className="flex gap-16 px-20 pt-8 justify-center max-w-[1800px] m-auto">
      <CVForm />
      <CVPreview/>
      </div>
    </div>
  );
}
