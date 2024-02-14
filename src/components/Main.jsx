import React from "react";
import CVForm from "./CVForm/CVForm";
import Header from "./Header";
import CVPreview from "./CVPreview/CVPreview";

export default function Main() {
  return (
    <div>
      <Header/>
      <CVForm />
      <CVPreview/>
    </div>
  );
}
