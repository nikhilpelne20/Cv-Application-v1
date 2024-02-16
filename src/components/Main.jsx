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

  const addExperience = ()=>{
    setCv((prevState)=>({
      ...prevState,experience:[
          ...prevState.experience,{
            id:crypto.randomUUID(),
            position:"",
            company:"",
            workExperience:"",
            city:"",
            from:"",
            to:""
          },
      ]
    }))
  }

  const handleExperienceChange = (e,id)=>{
      const {name,value} = e.target
      const updateExperience = cv.experience.map(exp=>{
        if(exp.id === id){
          return {
            ...exp,[name]:value
          };
        }
        return exp
      })

      setCv(prevState=>({
        ...prevState,
        experience:updateExperience
      }))
  }
  
  return (
    <div>
      <Header/>
      <div className="flex gap-8 pt-8 justify-center m-auto max-w-[1800px] flex-wrap mb-20">
      <CVForm 
      onPersonalChange={handlePersonalChange} 
      cv={cv} 
      onAddExp ={addExperience}
      onExperienceChange={handleExperienceChange}
      />
      <CVPreview cv={cv} />
      </div>
    </div>
  );
}
