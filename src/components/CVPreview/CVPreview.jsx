import React from 'react'
import HeaderPre from './HeaderPre'
import Content from './Content'
import Sidebar from './Sidebar'

export default function CVPreview() {
  return (
    <div className='w-full h-full m-auto max-w-[900px] mt-[200px] mb-[200px] shadow-lg '>
    <HeaderPre/>
    <div className="grid grid-cols-4">
    <div className="col-span-3">
        <Content/>
    </div>
    <div className="col-span-1">
        <Sidebar/>
    </div>
</div>
    
    
    </div>
  )
}
