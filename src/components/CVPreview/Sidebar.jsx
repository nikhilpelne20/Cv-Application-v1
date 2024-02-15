import React from "react";
import Title from "../Utils/Title";
import emptyAvatar from "../../assets/empty_avatar.png";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 p-4">
      <div>
        <img src={emptyAvatar} alt="profile" />
      </div>
      <Title title="Personal Details" />
      <div>
        <p className="text-lg font-bold">Address </p>
        <p></p>
      </div>
      <div>
        <p className="text-lg font-bold">Phone </p>
        <p></p>
      </div>
      <div>
        <p className="text-lg font-bold" >Email </p>
        <p></p>
      </div>
    </div>
  );
}
