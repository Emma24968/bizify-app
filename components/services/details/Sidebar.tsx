import React from 'react'
import { serviceList } from '@/app/data'
import { ArrowUpRight } from 'lucide-react'

export default function Sidebar() {
  return (
    <div><h3>Service List</h3>
    {serviceList.map((services,index)=>{
        return (
            <div key={index}>
            <button>{services.name}</button>
<ArrowUpRight />            </div>
        )
    })}
    </div>
  )
}
