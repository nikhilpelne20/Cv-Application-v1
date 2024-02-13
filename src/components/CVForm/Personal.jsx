import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'
import TextArea from '../Utils/TextArea'

export default function Personal() {
  return (
    <Section title="Personal Information">
        <Input
            type="text"
            name="firstName"
            placeholder="First Name"
        />
        <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
        />
        <Input
            type="text"
            name="title"
            placeholder="Title"
        />
        <Input
            type="file"
            name="title"
            label="Photo"
            placeholder="Photo"
        />
        <Input
            type="text"
            name="address"
            placeholder="Address"
        />
        <Input
            type="text"
            name="PhoneNumber"
            placeholder="Phone Number"
        />
        <Input
            type="text"
            name="email"
            placeholder="Email"
        />
        <TextArea
            type="text"
            name="description"
            placeholder="Description"
        />
    </Section>
  )
}
