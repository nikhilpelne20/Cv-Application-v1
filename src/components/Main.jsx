import React from "react";
import CVForm from "./CVForm/CVForm";
import Header from "./Header";
import CVPreview from "./CVPreview/CVPreview";

export default function Main() {
  return (
    <div>
      <Header/>
      <div className="flex gap-8 pt-8 justify-center m-auto max-w-[1800px] flex-wrap mb-20">
      <CVForm />
      <CVPreview/>
      </div>
    </div>
  );
}
