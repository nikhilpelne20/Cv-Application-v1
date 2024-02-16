import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'
import ExperienceItem from './ExperienceItem'

export default function Experience({experience,onAdd,onChange,odDelete}) {
    const experienceItem = experience.map((experienceItem)=>(
        <ExperienceItem
            id={experienceItem.id}
            key={experienceItem.id}
            position = {experienceItem.position}
            company = {experienceItem.company}
            workExperience = {experienceItem.workExperience}
            city = {experienceItem.city}
            from = {experienceItem.from}
            to = {experienceItem.to}
            onChange={onChange}
            onDelete={odDelete}
        />
    ))
  return (
    <Section title="Experience">
        {experienceItem}
        <button onClick={onAdd} className='button-blue'>Add</button>
    </Section>
  )
}
