import React from "react";
import Title from "../Utils/Title";
import emptyAvatar from "../../assets/empty_avatar.png";

export default function Sidebar({personalInfo}) {
  return (
    <div className="bg-gray-200 p-4">
      <div>
        <img src={emptyAvatar} alt="profile" />
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
