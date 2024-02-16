import React from 'react'
import Section from '../Utils/Section'
import Input from '../Utils/Input'
import EducationItem from './EducationItem'

export default function Education({education,onAdd,onDelete,onChange}) {
    const educationItems = education.map((educationItem)=>(
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            universityName={educationItem.universityName}
            city={educationItem.city}
            degree={educationItem.degree}
            subject={educationItem.subject}
            from={educationItem.from}
            to={educationItem.to}
            onDelete={onDelete}
            onChange={onChange}
        />
    ))
  return (
    <Section title="Education">
    {educationItems}
    <button onClick={onAdd} className='button-blue'>Add</button>
    </Section>
  )
}
