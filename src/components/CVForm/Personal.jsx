import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'
import TextArea from '../Utils/TextArea'

export default function Personal({onChange,personalInfo}) {
    console.log(personalInfo.lastName)
  return (
    <Section title="Personal Information">
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            
        />
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
        />
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="title"
            placeholder="Title"
            value={personalInfo.title}
        />
        <Input
            type="file"
            name="title"
            label="Photo"
            placeholder="Photo"
        />
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="address"
            placeholder="Address"
            value={personalInfo.address}
        />
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={personalInfo.phoneNumber}
        />
        <Input
            onChange={(e)=>onChange(e)}
            type="text"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
        />
        <TextArea
            type="text"
            name="description"
            placeholder="Description"
        />
    </Section>
  )
}
