import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'

export default function Education() {
  return (
    <Section title="Education">
    <Input type="text"
        name="university name"
        placeholder="University name"
    />
    <Input type="text"
        name="city"
        placeholder="City"
    />
    <Input type="text"
        name="degree"
        placeholder="Degree"
    />
    <Input type="text"
        name="subject"
        placeholder="Subject"
    />
    <Input type="text"
        name="from"
        placeholder="From"
    />
    <Input type="text"
        name="to"
        placeholder="To"
    />
    <button>Delete</button>
    <button className='button-blue'>Add</button>
    </Section>
  )
}
