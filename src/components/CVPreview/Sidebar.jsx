import React from 'react'
import Title from '../Utils/Title'
import emptyAvatar from "../../assets/empty_avatar.png";

export default function Sidebar() {
  return (
    <div className='bg-gray-200 p-4 h-[1200px]'>
    
    <div>
        <img src={emptyAvatar} alt="profile" />
    </div>
    <Title title="Personal Details"/>
    <div>
        <p>Address </p>
        <p>plot 68/c Vikrant Nagar, gokulPet rd 440023</p>
    </div>
    <div>
        <p>Phone </p>
        <p>34222440023</p>
    </div>
    <div>
        <p>Email </p>
        <p>vputin@gmail.co.in</p>
    </div>
    </div>
  )
}
