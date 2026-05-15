import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
  return (
    <div className='bg-[#F4F5F6] '>
        <h3>Search here</h3>
        <span className='flex '>
        <input className='rounded bg-white p-1.5' type="text" placeholder='search...' /><span className='bg-[#84A17D] flex p-0.5 justify-center'><SearchIcon color='white'/></span></span>
    </div>
  )
}
