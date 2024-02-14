import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'

export default function Experience() {
  return (
    <Section title="Experience">
        <Input type="text"
            name="position"
            placeholder="Position"
        />
        <Input type="text"
            name="company"
            placeholder="Company"
        />
        <Input type="text"
            name="work experience"
            placeholder="Work Experience"
        />
        <Input type="text"
            name="city"
            placeholder="City"
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
