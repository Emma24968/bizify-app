import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Social() {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-2 rounded hover:bg-[#84A17D] dark:hover:bg-black dark:hover:text-white dark:bg-[#84A17D] cursor-pointer">
        <Facebook/>
      </div>

      <div className="bg-white p-2 rounded hover:bg-[#84A17D] dark:hover:bg-black dark:hover:text-white dark:bg-[#84A17D] cursor-pointer">
        <Twitter/>
      </div>

      <div className="bg-white p-2 rounded hover:bg-[#84A17D] dark:hover:bg-black dark:hover:text-white dark:bg-[#84A17D] cursor-pointer">
        <Linkedin/>
      </div>
    </div>
  )
}
