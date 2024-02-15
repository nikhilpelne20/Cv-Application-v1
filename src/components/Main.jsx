import React, { useState } from "react";
import CVForm from "./CVForm/CVForm";
import Header from "./Header";
import CVPreview from "./CVPreview/CVPreview";
import exampleCV from "./Utils/emptyCv";

export default function Main() {
  const [cv,setCv] = useState(exampleCV)
  const handlePersonalChange = (e)=>{
    const {name,value} = e.target
    
    setCv((prevState)=>({
      ...prevState , personalInfo:{
        ...prevState.personalInfo, [name]:value
      }

    }))
  }
  return (
    <div>
      <Header/>
      <div className="flex gap-8 pt-8 justify-center m-auto max-w-[1800px] flex-wrap mb-20">
      <CVForm onPersonalChange={handlePersonalChange} cv={cv}/>
      <CVPreview cv={cv} />
      </div>
    </div>
  );
}
