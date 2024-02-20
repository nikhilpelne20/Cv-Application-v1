import React, { useState } from "react";
import { useRef } from "react";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import exampleCV from "./Utils/emptyCv";
import sampleCV from "./Utils/exampleCV";
import ReactToPrint, { useReactToPrint } from "react-to-print";

export default function Main() {
  const [cv, setCv] = useState(exampleCV);
  const handlePersonalChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleFileChange(e);
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const addExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: crypto.randomUUID(),
          position: "",
          company: "",
          workExperience: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    const updateExperience = cv.experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          [name]: value,
        };
      }
      return exp;
    });

    setCv((prevState) => ({
      ...prevState,
      experience: updateExperience,
    }));
  };

  const deleteExperience = (id) => {
    const deleteExp = cv.experience.filter((exp) => {
      return exp.id !== id;
    });

    setCv((prevState) => ({
      ...prevState,
      experience: deleteExp,
    }));
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    const updateEducation = cv.education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [name]: value };
      }
      return edu;
    });

    setCv((prevState) => ({
      ...prevState,
      education: updateEducation,
    }));
  };

  const addEducation = () => {
    console.log("inside");
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: crypto.randomUUID(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const deleteEducation = (id) => {
    const deleteEdu = cv.education.filter((edu) => {
      return edu.id !== id;
    });

    setCv((prevState) => ({
      ...prevState,
      education: deleteEdu,
    }));
  };

  const LoadExampleCV = () => {
    setCv(sampleCV);
  };

  const resetCV = () => {
    setCv(exampleCV);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div>
      <div className="flex gap-8 pt-8 justify-center m-auto max-w-[1800px] flex-wrap mb-20">
        <CVForm
          cv={cv}
          onPersonalChange={handlePersonalChange}
          onExperienceChange={handleExperienceChange}
          onAddExp={addExperience}
          onDeleteExp={deleteExperience}
          onEducationChange={handleEducationChange}
          onAddEdu={addEducation}
          onDeleteEdu={deleteEducation}
          onLoadExampleCV={LoadExampleCV}
          onResetCV={resetCV}
          onPrintCV={handlePrint}
        />
        <CVPreview cv={cv} ref={componentRef} />
      </div>
    </div>
  );
}
