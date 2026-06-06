import React from 'react'
import Image from 'next/image'
type ContactProps={
  header:string,
  details:string,
  info:string,
  icon:React.ReactNode

}
export default function Contact({header,details,info,icon}:ContactProps) {
  return (
    <div className='bg-[#F4F5F6] p-4 rounded w-[30rem]'>
        <div className=" flex justify-between ">
        <h3>{header}</h3>
        <div>{icon}</div>

        </div>
        <p>{details}</p>
        <p>{info}</p>
    </div>
  )
}

