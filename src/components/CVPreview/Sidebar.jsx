import React from "react";
import Title from "../Utils/Title";

export default function Sidebar({personalInfo}) {
  return (
    <div className="bg-gray-200 p-4">
      <div>
        <img className="mb-8" src={personalInfo.photo} alt="profile" />
      </div>
      <Title title="Personal Details" />
      <div>
        <p className="text-lg font-bold">Address </p>
        <p>{personalInfo.address}</p>
      </div>
      <div>
        <p className="text-lg font-bold">Phone </p>
        <p>{personalInfo.phoneNumber}</p>
      </div>
      <div>
        <p className="text-lg font-bold" >Email </p>
        <p>{personalInfo.email}</p>
      </div>
    </div>
  );
}
